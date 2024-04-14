import { useState, useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import Drawer from "@mui/material/Drawer";
import Orders from "./Orders";
import Alert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";

const Perpetual = () => {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("long");
  const location = useLocation();

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
  const [error, setError] = useState("");

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

            <button onClick={toggleDrawer(true)}>
              <TuneIcon
                style={{ font: "25", color: "#ffffff" }}
                className="m-4"
              />
            </button>
            <span className="font-semibold text-white">{active} / USDT</span>
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

        <div className="flex flex-row justify-between text-white p-3 bg-black text-xs">
          <div className="flex flex-col">
            <div>Available Balance</div>
            <div className="text-center">0</div>
          </div>
          <div className="flex flex-col">
            <div>Unrealized P&L</div>
            <div className="text-center">0</div>
          </div>
          <div className="flex flex-col">
            <div>Margin rate</div>
            <div className="text-center">--</div>
          </div>
        </div>
        <div className="flex flex-row justify-between bg-[#0F1720]">
          <div className="flex flex-col mt-5 ml-3">
            <div className="flex flex-row">
              <p className="text-white text-sm">Open Position</p>
            </div>
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
                Long
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
                Short
              </button>
            </div>
            <div className="flex flex-row">
              <div>
                <select
                  name=""
                  id=""
                  className="bg-[#0F1720] ml-1 border border-[#242B34] rounded text-[#dddddd] text-xs py-2 px-6 w-50"
                >
                  <option value="" className="text-xs">
                    Market
                  </option>
                  <option value="" className="text-xs">
                    Limit
                  </option>
                </select>
              </div>
              <div className="flex text-white text-xs border border-[#242B34] rounded px-3 text-center items-center">
                100 X
              </div>
            </div>
            <div className="flex justify-center p-2 mt-2 text-white text-xs border border-[#242B34] rounded">
              {btcData ? parseFloat(btcData.p).toFixed(2) : "--"}
            </div>

            <div className="flex flex-row justify-between text-xs text-[#dddddd] mt-2">
              Amount
            </div>
            <div className="flex flex-row justify-center items-center">
              <div>
                <button className="text-white text-xs border p-1 mt-3 rounded border-[#242B34]">
                  -
                </button>
              </div>
              <input
                type="text"
                className="text-[#dddddd] p-1 text-xs border border-[#35393F] rounded text-center mt-3 bg-[#0F1720] active:border-[#35393F]"
                placeholder="Enter quantity"
              />
              <div>
                <button className="text-white p-1 rounded mt-3 text-xs text-xs border border-[#242B34]">
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-row text-xs text-[#dddddd] mt-2">
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
            <div className="flex flex-row mt-2">
              <input
                type="checkbox"
                className="border border-[#35393F] bg-[#0F1720]"
              />
              <p className="text-xs text-[#dddddd] ml-3">Take P&L</p>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-xs text-white">Available Amount </p>
              <p className="text-xs text-white">0 USDT</p>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-xs text-white">Maximum Positions</p>
              <p className="text-xs text-white">0 Pieces</p>
            </div>

            <div className="flex flex-col mt-3 mb-3">
              <button
                className="text-white px-6 py-1 text-sm border border-[#313840] rounded bg-[#]"
                style={{
                  backgroundColor:
                    activeButton == "short" ? "#F36464" : "#04CF99",
                }}
                onClick={() => setError("Error")}
              >
                {activeButton == "short" ? "Buy Short" : "Buy Long"}
              </button>
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

export default Perpetual;
