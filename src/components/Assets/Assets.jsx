import { useEffect, useState } from "react";
import Overview from "./Overview";
import Exchange from "./Exchange";
import Trade from "./Trade";
import Perpetual from "./Perpetual";
import Finance from "./Finance";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const Assets = () => {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("Overview");
  const [getUser, setGetUser] = useState(null);
  const [totalBalance, setTotalBalance] = useState(0.0);

  //   "DOT",
  //   "XRP",
  //   "LINK",
  //   "BCH",
  //   "LTC",
  //   "ADA",
  //   "EOS",
  //   "TRX",
  //   "XMR",
  //   "DASH",
  //   "FIL",
  //   "YFI",
  //   "ZEC",
  //   "DOGE",

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookies = new Cookies();
        const token = cookies.get("jwt");
        const user = jwtDecode(token);

        const response = await Axios.get(
          `https://base.tradentra.io/api/user/${user.user_id}`
        );
        setGetUser(
          response.data["BTC_Balance"] +
            response.data["ETH_Balance"] +
            response.data["DOT_Balance"] +
            response.data["XRP_Balance"] +
            response.data["LINK_Balance"] +
            response.data["BCH_Balance"] +
            response.data["LTC_Balance"] +
            response.data["ADA_Balance"] +
            response.data["EOS_Balance"] +
            response.data["TRX_Balance"] +
            response.data["XMR_Balance"] +
            response.data["DASH_Balance"] +
            response.data["FIL_Balance"] +
            response.data["YFI_Balance"] +
            response.data["ZEC_Balance"] +
            response.data["DOGE_Balance"]
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#0F1720]">
      <div className="flex flex-row justify-center items-center text-[#dddddd]">
        <div className="p-2">
          <button
            onClick={() => {
              setActiveComponent("Overview");
            }}
          >
            <p className={activeComponent == "Overview" ? "text-lg" : ""}>
              Overview
            </p>
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() => {
              setActiveComponent("Exchange");
            }}
          >
            Exchange
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() => {
              setActiveComponent("Trade");
            }}
          >
            Trade
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() => {
              setActiveComponent("Perpetual");
            }}
          >
            Perpetual
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() => {
              setActiveComponent("Finance");
            }}
          >
            Finance
          </button>
        </div>
      </div>
      <div>
        {activeComponent == "Overview" && <Overview totalAssets={getUser} />}
      </div>
      <div>{activeComponent == "Exchange" && <Exchange />}</div>
      <div>{activeComponent == "Trade" && <Trade />}</div>
      <div>{activeComponent == "Perpetual" && <Perpetual />}</div>
      <div>{activeComponent == "Finance" && <Finance />}</div>
    </div>
  );
};

export default Assets;
