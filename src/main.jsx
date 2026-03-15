import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Component/layout/RootLayout.jsx";
import Home from "./Component/Home/Home.jsx";
import AddCar from "./Component/AddCar/AddCar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "home",
        Component: Home,
      },
      {
        path: 'addCar',
        element: <AddCar></AddCar>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
