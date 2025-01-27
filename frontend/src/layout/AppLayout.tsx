import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
function AppLayout() {
  //check if user is authenticated
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-[82%] h-full overflow-hidden">
        <Topbar />
        <div className="bg-[#f7f7f7] h-screen w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl">
            Write your code here,
            <span className="text-[5rem] font bold">NHI TA BUND MAAR DENI</span>
          </h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
