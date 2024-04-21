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
  const [response, setResponse] = useState();

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
          response.data["BTC_Balance"] * 65012.4 +
            response.data["ETH_Balance"] * 3158.88 +
            response.data["DOT_Balance"] * 7.12 +
            response.data["XRP_Balance"] * 0.5821 +
            response.data["LINK_Balance"] * 18.84 +
            response.data["BCH_Balance"] * 510.67 +
            response.data["LTC_Balance"] * 84.56 +
            response.data["ADA_Balance"] * 0.5015 +
            response.data["EOS_Balance"] * 0.8247 +
            response.data["TRX_Balance"] * 0.111 +
            response.data["XMR_Balance"] * 120.07 +
            response.data["DASH_Balance"] * 30.77 +
            response.data["FIL_Balance"] * 6.55 +
            response.data["YFI_Balance"] * 7133.83 +
            response.data["ZEC_Balance"] * 22.27 +
            response.data["DOGE_Balance"] * 0.61
        );
        setResponse(response.data);
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
        {activeComponent == "Overview" && (
          <Overview totalAssets={getUser} response={response} />
        )}
      </div>
      <div>
        {activeComponent == "Exchange" && (
          <Exchange totalAssets={getUser} response={response} />
        )}
      </div>
      <div>
        {activeComponent == "Trade" && (
          <Trade totalAssets={getUser} response={response} />
        )}
      </div>
      <div>
        {activeComponent == "Perpetual" && (
          <Perpetual totalAssets={getUser} response={response} />
        )}
      </div>
      <div>
        {activeComponent == "Finance" && (
          <Finance totalAssets={getUser} response={response} />
        )}
      </div>
    </div>
  );
};

export default Assets;
