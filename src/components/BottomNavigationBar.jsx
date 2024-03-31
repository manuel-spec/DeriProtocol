import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import home from "../assets/icons/nav/home.png";
import spot from "../assets/icons/nav/spot.png";
import trading from "../assets/icons/nav/trading.png";
import perpetual from "../assets/icons/nav/perpetual.png";
import assets from "../assets/icons/nav/assets.png";
import active_home from "../assets/icons/nav/active/home.png";
import active_spot from "../assets/icons/nav/active/spot.png";
import active_trading from "../assets/icons/nav/active/trade.png";
import active_perpetual from "../assets/icons/nav/active/perpetual.png";
import active_assets from "../assets/icons/nav/active/assets.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  return (
    <div>
      <BottomNavigation
        theme={darkTheme}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="p-3">
            <Link
              to="/"
              className="text-white flex flex-col justify-center p-2"
            >
              <img
                src={location.pathname == "/" ? active_home : home}
                alt=""
                width={25}
                className="ml-1"
              />
              <p
                className={
                  location.pathname == "/"
                    ? "text-xs text-center text-[#F0C163]"
                    : "text-xs text-center"
                }
              >
                Home
              </p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/spot"
              className="text-white flex flex-col justify-center p-2"
            >
              <img
                src={location.pathname == "/spot" ? active_spot : spot}
                alt=""
                width={25}
                className="ml-1"
              />
              <p
                className={
                  location.pathname == "/spot"
                    ? "text-xs text-center text-[#F0C163]"
                    : "text-xs text-center"
                }
              >
                Spot
              </p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/trade"
              className="text-white flex flex-col justify-center p-2"
            >
              <img
                src={location.pathname == "/trade" ? active_trading : trading}
                alt=""
                width={25}
                className="ml-1"
              />
              <p
                className={
                  location.pathname == "/trade"
                    ? "text-xs text-center text-[#F0C163]"
                    : "text-xs text-center"
                }
              >
                Trading
              </p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/perpetual"
              className="text-white flex flex-col justify-center p-2"
            >
              <img
                src={
                  location.pathname == "/perpetual"
                    ? active_perpetual
                    : perpetual
                }
                alt=""
                width={25}
                className="ml-3"
              />
              <p
                className={
                  location.pathname == "/perpetual"
                    ? "text-xs text-center text-[#F0C163]"
                    : "text-xs text-center"
                }
              >
                Perpetual
              </p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/assets"
              className="text-white flex flex-col justify-center p-2"
            >
              <img
                src={location.pathname == "/assets" ? active_assets : assets}
                alt=""
                width={25}
                className="ml-1"
              />
              <p
                className={
                  location.pathname == "/assets"
                    ? "text-xs text-center text-[#F0C163]"
                    : "text-xs text-center"
                }
              >
                Assets
              </p>
            </Link>
          </div>
        </div>
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigationBar;
