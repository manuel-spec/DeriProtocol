import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LoopIcon from "@mui/icons-material/Loop";
import WalletIcon from "@mui/icons-material/Wallet";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Home } from "./HomeComponent/Home";
import Spot from "./Spot/Spot";
import Trade from "./Trading/Trading";
import Perpetual from "./Perpetual/Perpetual";
import Assets from "./Assets/Assets";

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
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon style={{ color: "#C0C0C0" }} />}
          style={{ color: "#C0C0C0" }}
          sx={{
            color:
              value === 0
                ? darkTheme.palette.primary.main
                : darkTheme.palette.text.secondary,
          }}
        />
        <BottomNavigationAction
          label="Spot"
          icon={<TrendingUpOutlinedIcon style={{ color: "#C0C0C0" }} />}
          style={{ color: "#C0C0C0" }}
        />
        <BottomNavigationAction
          label="Trading"
          icon={<CurrencyExchangeOutlinedIcon style={{ color: "#C0C0C0" }} />}
          style={{ color: "#C0C0C0" }}
        />
        <BottomNavigationAction
          label="Perpetual"
          icon={<LoopIcon style={{ color: "#C0C0C0" }} />}
          style={{ color: "#C0C0C0" }}
        />
        <BottomNavigationAction
          label="Assets"
          icon={<WalletIcon style={{ color: "#C0C0C0" }} />}
          style={{ color: "#C0C0C0" }}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigationBar;
