import { useState, useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import Drawer from "@mui/material/Drawer";
import Orders from "./Orders";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Spot = () => {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("long");
  const [error, setError] = useState("");
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [btcData, setBtcData] = useState(null);
  const [crypto, setCrypto] = useState([
    "BTC",
    "ETH",
    "DOT",
    "XRP",
    "LINK",
    "BCH",
    "LTC",
    "ADA",
    "EOS",
    "TRX",
    "XMR",
    "DASH",
    "FIL",
    "YFI",
    "ZEC",
    "DOGE",
  ]);
  const [active, setActive] = useState(crypto[0]);
  const location = useLocation();
  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${active.toLocaleLowerCase()}usdt@trade`
    );
    ws.onmessage = (event) => {
      setBtcData(JSON.parse(event.data));
      // console.log(event.data);
    };

    // console.log(active.toLocaleLowerCase());
    return () => {
      ws.close();
    };
  }, [active, location]);

  const DrawerList = (
    <div className="w-350 h-200 bg-[#1E2229] pr-20 pl-10 mb-30">
      <div className="flex flex-col text-white mt-5">
        <p className="text-lg font-bold">Trade</p>
        <span className="border rounded border-[#FEA453] w-10"></span>

        <div className="flex flex-col mt-5">
          <div className="coin-item active p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[0]);
                setOpen(false);
              }}
            >
              BTC / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[1]);
                setOpen(false);
              }}
            >
              ETH / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[2]);
                setOpen(false);
              }}
            >
              DOT / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[3]);
                setOpen(false);
              }}
            >
              XRP / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[4]);
                setOpen(false);
              }}
            >
              LINK / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[5]);
                setOpen(false);
              }}
            >
              BCH / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[6]);
                setOpen(false);
              }}
            >
              LTC / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[7]);
                setOpen(false);
              }}
            >
              ADA / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <span
              onClick={() => {
                setActive(crypto[8]);
                setOpen(false);
              }}
            >
              EOS / USDT
            </span>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[9]);
                setOpen(false);
              }}
            >
              TRX / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[10]);
                setOpen(false);
              }}
            >
              XMR / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[11]);
                setOpen(false);
              }}
            >
              DASH / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[12]);
                setOpen(false);
              }}
            >
              FIL / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[13]);
                setOpen(false);
              }}
            >
              YFI / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[14]);
                setOpen(false);
              }}
            >
              ZEC / USDT
            </button>
          </div>
          <div className="coin-item p-2 font-bold ">
            <button
              onClick={() => {
                setActive(crypto[15]);
                setOpen(false);
              }}
            >
              DOGE / USDT
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <div className="flex flex-row justify-between items-center bg-[#0F1720]">
          <div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>

            <div className="flex flex-row ">
              <button onClick={toggleDrawer(true)}>
                <TuneIcon
                  style={{ font: "25", color: "#ffffff" }}
                  className="m-4"
                />
              </button>
              <div className="font-semibold text-white mt-4">
                {active} / USDT
              </div>
            </div>
          </div>
          <CandlestickChartOutlinedIcon
            style={{ font: "25", color: "#ffffff" }}
            className="m-4"
          />
        </div>
        {error == "Error" && (
          <Alert variant="filled" severity="error">
            Please Complete Advanced Identity Verification!
          </Alert>
        )}
        <div className="flex flex-row justify-between bg-[#0F1720]">
          <div className="flex flex-col mt-5 ml-3">
            <div className="flex flex-row text-white p-2">
              <button
                className="px-6 py-1 text-sm border border-[#313840] rounded bg-[#]"
                onClick={() => {
                  setActiveButton("long");
                }}
                style={{
                  backgroundColor: activeButton == "long" ? "#04CF99" : "",
                }}
              >
                Buy
              </button>
              <button
                className="px-6 text-sm  border border-[#313840] rounded bg-[#]"
                onClick={() => {
                  setActiveButton("short");
                }}
                style={{
                  backgroundColor: activeButton == "short" ? "#F36464" : "",
                }}
              >
                Sell
              </button>
            </div>
            <div className="mt-2">
              <p className="text-white text-sm">Market</p>
            </div>
            <div>
              <p className="text-white p-1 text-xs border border-[#35393F] rounded text-center mt-3">
                {btcData ? parseFloat(btcData.p).toFixed(2) : "--"}
              </p>
            </div>
            <div className="text-white text-xs mt-1">
              ≈ {btcData ? parseFloat(btcData.p).toFixed(2) : "--"}
            </div>
            <div className="">
              <input
                type="text"
                className="text-white p-1 text-xs border border-[#35393F] rounded text-center mt-3 bg-[#0F1720] active:border-[#35393F]"
                placeholder="Enter quantity"
              />
            </div>
            <div className="flex flex-row text-xs text-white mt-2">
              <div className="text-[#35393F] border rounded px-1 border-[#35393F]">
                25%
              </div>
              <div className="text-[#35393F] ml-1 border rounded px-1 border-[#35393F]">
                50%
              </div>
              <div className="text-[#35393F] ml-1 border rounded px-1 border-[#35393F]">
                75%
              </div>
              <div className="text-[#35393F] ml-1 border rounded px-1 border-[#35393F]">
                100%
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <button
                className="text-white px-6 py-1 text-sm border border-[#313840] rounded bg-[#]"
                style={{
                  backgroundColor:
                    activeButton == "short" ? "#F36464" : "#04CF99",
                }}
                onClick={() => setError("Error")}
              >
                {activeButton == "short" ? "Sell" : "Buy"}
              </button>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-xs text-white">Availabale 0</p>
              <p className="text-xs text-white">BTC</p>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-xs text-white">Max Sell 0</p>
              <p className="text-xs text-white">USDT</p>
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
            <div className="flex flex-row justify-between items-center text-white text-xs">
              <div className="p-3">Price (USDT)</div>
              <div className="p-3">Amount ({active})</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5 text-[#04CF99]">
                <p className="">
                  {btcData ? (parseFloat(btcData.p) + 0.02).toFixed(2) : "--"}
                </p>
              </div>
              <div className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 6.3).toFixed(2) : "--"}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5 text-[#04CF99]">
                {btcData ? (parseFloat(btcData.p) - 0.02).toFixed(2) : "--"}
              </div>
              <p className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 2.6).toFixed(2) : "--"}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5 text-[#04CF99]">
                {btcData ? (parseFloat(btcData.p) + 0.04).toFixed(2) : "--"}
              </div>
              <p className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 4.5).toFixed(2) : "--"}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5 text-[#04CF99]">
                {btcData ? (parseFloat(btcData.p) + 0.02).toFixed(2) : "--"}
              </div>
              <p className="mr-5">
                {" "}
                <p className="mr">
                  {btcData ? (parseFloat(btcData.q) + 6).toFixed(2) : "--"}
                </p>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5 text-[#04CF99]">
                {btcData ? (parseFloat(btcData.p) + 0.2).toFixed(2) : "--"}
              </div>
              <p className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 4).toFixed(2) : "--"}
              </p>
            </div>
            <div className="ml-5 text-[#04CF99]">
              <p> {btcData ? parseFloat(btcData.p).toFixed(2) : "--"}</p>
            </div>

            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5 text-[#F36464]">
                <p>
                  {" "}
                  {btcData ? (parseFloat(btcData.p) - 0.04).toFixed(2) : "--"}
                </p>
              </div>
              <div className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 2.9).toFixed(2) : "--"}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5 text-[#F36464]">
                {btcData ? (parseFloat(btcData.p) - 0.02).toFixed(2) : "--"}
              </div>
              <div className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 2.7).toFixed(2) : "--"}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5 text-[#F36464]">
                {btcData ? (parseFloat(btcData.p) - 0.01).toFixed(2) : "--"}
              </div>
              <div className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 1.9).toFixed(2) : "--"}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5 text-[#F36464]">
                {btcData ? (parseFloat(btcData.p) - 0.12).toFixed(2) : "--"}
              </div>
              <div className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 2.2).toFixed(2) : "--"}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5 text-[#F36464]">
                {btcData ? (parseFloat(btcData.p) - 20).toFixed(2) : "--"}
              </div>
              <div className="mr-5">
                {btcData ? (parseFloat(btcData.q) + 1).toFixed(2) : "--"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Orders />
    </div>
  );
};

export default Spot;
