import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/common/Home";
import {Auth} from "./pages/common/Auth";
import Receptionist from "./pages/receptionist/Receptionist";
import Paramedic from "./pages/paramedics/Paramedic";
import Doctor from "./pages/doctor/Doctor";
import {InventoryForm} from "./pages/paramedics/Inventory.tsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        { path: "receptionist", element: <Receptionist /> },
        {
          path: "queue",
          element: <Paramedic/>,
        },
        {
          path: "inventory",
          element: <InventoryForm />,
        },
        {
          path: "doctor",
          element: <Doctor />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
