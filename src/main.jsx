import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Component/layout/RootLayout.jsx";
import Home from "./Component/Home/Home.jsx";
import AddCar from "./Component/AddCar/AddCar.jsx";
import Register from "./Component/Register/Register.jsx";
import Login from "./Component/Login/Login.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import MyListings from "./Component/MyListings/MyListings.jsx";
import BrowseCars from "./Component/BrowseCars/BrowseCars.jsx";
import CarDetails from "./Component/CarDetails/CarDetails.jsx";
import MyBookings from "./Component/MyBookings/MyBookings.jsx";

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
        path: "addCar",
        element: <AddCar></AddCar>,
      },
      {
        path: "myListings",
        element: <MyListings></MyListings>,
      },
      {
        path: "browseCars",
        Component: BrowseCars,
      },
      {
        path: "carDetails/:id",
        element: <CarDetails></CarDetails>
      },
      {
        path: "myBookings",
        element: <MyBookings></MyBookings>
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
