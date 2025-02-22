import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "../store/userContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast} from "react-toastify";

function AppLayout() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(user.role)
    toast.success(`Welcome ${user.name}`);
    let time: NodeJS.Timeout;
    if (user.role === "admin") navigate("/app/admin");
    else if (user.role === "receptionist") navigate("/app/opd");
    else if (user.role === "paramedic") navigate("/app/inventory");
    else if (user.role === "doctor") navigate("/app/prescribe");
    else time=setTimeout(() => navigate("/auth"), 1000);
    return () => clearTimeout(time);
  }, [user.role, navigate, user.name]);

  return (
    <>
      {user.role && (
        <div className="flex">
          <ToastContainer />
          <Sidebar />
          <div className="fixed right-0 top-0 w-[85%]">
            <Topbar />
            <div className="overflow-y-auto h-[calc(100vh-4rem)]">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppLayout;
