import {
  LayoutDashboard,
  Stethoscope,
  ClipboardList,
  Trash2,
  Coffee,
  GraduationCap,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      logo: <LayoutDashboard className="mr-3 h-5 w-5" />,
    },
    {
      name: "OPD",
      logo: <Stethoscope className="mr-3 h-5 w-5" />,
    },
    {
      name: "OPD Log",
      logo: <ClipboardList className="mr-3 h-5 w-5" />,
    },
    {
      name: "Medical Waste",
      logo: <Trash2 className="mr-3 h-5 w-5" />,
    },
    {
      name: "Rest",
      logo: <Coffee className="mr-3 h-5 w-5" />,
    },
    {
      name: "Training",
      logo: <GraduationCap className="mr-3 h-5 w-5" />,
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-[15%] bg-darkBlue text-white">
      <div className="flex gap-2 items-center text-xl font-semibold p-4">
        <div className="size-12 rounded-full overflow-hidden">
          <img src="/tiet_logo.jpg" className="w-full h-full object-cover" />
        </div>
        <h1>Thapar MediHub</h1>
      </div>

      <div className="px-4">
        <nav className="space-y-2">
          {links.map((link, i) => (
            <Link
              to={""}
              key={i}
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg group transition-colors duration-200"
            >
              {link.logo}
              <p className="group-hover:ml-1.5 transition-all duration-300">
                {link.name}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 w-full p-4">
        <button className="flex w-full items-center px-4 py-3 text-gray-300 group hover:bg-gray-700 rounded-lg">
          <LogOut className="mr-3 h-5 w-5" />
          <p className="group-hover:ml-1.5 transition-all duration-300">
            Logout
          </p>
        </button>
      </div>
    </div>
  );
}
