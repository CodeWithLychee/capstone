import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function AppLayout() {
  //check if user is authenticated

  return (
    <div className="flex">
      <Sidebar />
      <div className="fixed right-0 top-0 w-[85%]">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
