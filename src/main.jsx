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
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import SignUP from "./components/Auth/SignUp.jsx";
import TradeDetail from "./components/Trading/TradeDetail.jsx";
import Recharge from "./components/Recharge/Recharge.jsx";
import Withdrawal from "./components/withdrawal/Withdrawal.jsx";
import RechargeDetail from "./components/Recharge/RechargeDetail.jsx";
import HelpCenter from "./components/Help_center/HelpCenter.jsx";
import More from "./components/Help_center/More.jsx";
import Support from "./components/Support/Support.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Chat from "./components/Admin/Chat.jsx";
import Update from "./components/Admin/Update.jsx";

const ProtectedRoute = ({ element: Component }) => {
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT token exists
    if (!token) {
      // Redirect to sign-in page if token doesn't exist
      navigate("/auth/signin");
    }
  }, [token, navigate]);

  // Render the component if token exists
  return token ? <Component /> : null;
};

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
        element: <ProtectedRoute element={Spot} />,
      },
      {
        path: "/update",
        element: <ProtectedRoute element={Update} />,
      },
      {
        path: "/trade",
        element: <ProtectedRoute element={Trade} />,
      },
      {
        path: "/chat",
        element: <ProtectedRoute element={Chat} />,
      },
      {
        path: "/help",
        element: <HelpCenter />,
      },
      {
        path: "/help/more",
        element: <More />,
      },
      {
        path: "/trade/details",
        element: <ProtectedRoute element={TradeDetail} />,
      },
      {
        path: "/support/",
        element: <ProtectedRoute element={Support} />,
      },
      {
        path: "/perpetual",
        element: <ProtectedRoute element={Perpetual} />,
      },
      {
        path: "/assets",
        element: <ProtectedRoute element={Assets} />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute element={Admin} />,
      },
      {
        path: "auth/signin",
        element: <SignIn />,
      },
      {
        path: "recharge/",
        element: <Recharge />,
      },
      {
        path: "/recharge/details/",
        element: <RechargeDetail />,
      },
      {
        path: "withdrawal/",
        element: <Withdrawal />,
      },
      {
        path: "auth/register",
        element: <SignUP />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
