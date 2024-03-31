import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import home from "../assets/icons/nav/home.png";
import spot from "../assets/icons/nav/spot.png";
import trading from "../assets/icons/nav/trading.png";
import perpetual from "../assets/icons/nav/perpetual.png";
import assets from "../assets/icons/nav/assets.png";
import { useLocation } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  console.log("Current URL:", location.pathname);
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
              <img src={home} alt="" width={25} className="ml-1" />
              <p className="text-xs text-center">Home</p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/spot"
              className="text-white flex flex-col justify-center p-2"
            >
              <img src={spot} alt="" width={25} className="ml-1" />
              <p className="text-xs text-center">Spot</p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/trade"
              className="text-white flex flex-col justify-center p-2"
            >
              <img src={trading} alt="" width={25} className="ml-1" />
              <p className="text-xs text-center">Trading</p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/perpetual"
              className="text-white flex flex-col justify-center p-2"
            >
              <img src={perpetual} alt="" width={25} className="ml-3" />
              <p className="text-xs text-center">Perpetual</p>
            </Link>
          </div>
          <div className="p-3">
            <Link
              to="/assets"
              className="text-white flex flex-col justify-center p-2"
            >
              <img src={assets} alt="" width={25} className="ml-1" />
              <p className="text-xs text-center">Assets</p>
            </Link>
          </div>
        </div>
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigationBar;
