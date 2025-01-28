import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout() {
  //check if user is authenticated

  return (
    <div className="flex">
      <Sidebar />
      <div className="fixed right-0 top-0 w-[85%]">
        <Topbar />
        <div className="overflow-y-auto h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
