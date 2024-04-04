import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/HomeComponent/Home.jsx";
import Spot from "./components/Spot/Spot.jsx";
import Trade from "./components/Trading/Trading.jsx";
import Perpetual from "./components/Perpetual/Perpetual.jsx";
import Assets from "./components/Assets/Assets.jsx";
import SignIn from "./components/Auth/SignIn.jsx";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const [cookies] = useCookies(["jwtToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT token exists
    if (!cookies.jwtToken) {
      // Redirect to sign-in page if token doesn't exist
      navigate("/auth/signin");
    }
  }, [cookies.jwtToken, navigate]);

  // Render the component if token exists
  return cookies.jwtToken ? <Component /> : null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={Home} />,
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
      {
        path: "auth/signin",
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
