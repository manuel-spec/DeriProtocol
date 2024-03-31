import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LoopIcon from "@mui/icons-material/Loop";
import WalletIcon from "@mui/icons-material/Wallet";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);

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
        <Link to="/" className="text-white flex flex-col justify-center p-2">
          <HomeIcon style={{ color: "#C0C0C0" }} className="" />
          <p className="text-xs text-center">Home</p>
        </Link>
        <Link
          to="/spot"
          className="text-white flex flex-col justify-center p-2"
        >
          <TrendingUpOutlinedIcon style={{ color: "#C0C0C0" }} />
          <p className="text-xs text-center">Spot</p>
        </Link>
        <Link
          to="/trade"
          className="text-white flex flex-col justify-center p-2"
        >
          <CurrencyExchangeOutlinedIcon style={{ color: "#C0C0C0" }} />
          <p className="text-xs text-center">Trading</p>
        </Link>
        <Link
          to="/perpetual"
          className="text-white flex flex-col justify-center p-2"
        >
          <LoopIcon style={{ color: "#C0C0C0" }} />
          <p className="text-xs text-center">Perpetual</p>
        </Link>
        <Link
          to="/assets"
          className="text-white flex flex-col justify-center p-2"
        >
          <WalletIcon style={{ color: "#C0C0C0" }} />
          <p className="text-xs text-center">Assets</p>
        </Link>
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigationBar;
