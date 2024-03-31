import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/HomeComponent/Home.jsx";
import Spot from "./components/Spot/Spot.jsx";
import Trade from "./components/Trading/Trading.jsx";
import Perpetual from "./components/Perpetual/Perpetual.jsx";
import Assets from "./components/Assets/Assets.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/spot",
        element: <Spot />,
      },
      {
        path: "/trade",
        element: <Trade />,
      },
      {
        path: "/perpetual",
        element: <Perpetual />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
