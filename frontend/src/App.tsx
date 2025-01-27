import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home.tsx";
import Receptionist from "./pages/Receptionist.tsx";
import Paramedics from "./pages/Paramedic.tsx";
import Doctor from "./pages/Doctor";
import Auth from "./pages/Auth";

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
        { path: "paramedic", element: <Paramedics /> },
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
