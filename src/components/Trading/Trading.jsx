import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import Drawer from "@mui/material/Drawer";
import Orders from "./Orders";
import DateTime from "./Datetime";

const Trade = () => {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("long");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="w-350 h-full bg-[#0F1720] p-10">
      <div className="flex flex-col text-white">
        <p className="text-lg font-bold">Spot</p>
        <span className="border rounded border-[#FEA453] w-10"></span>

        <div className="flex flex-col ">
          <div className="p-2 font-bold ">
            <button>BTC/USDT</button>
          </div>
          <div className="p-2 font-bold">
            <button>ETH/USDT</button>
          </div>
          <div className="p-2 font-bold">
            <button>USDC/USDT</button>
          </div>
          <div className="p-2 font-bold">
            <button>DAI/USDT</button>
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
            <span className="font-semibold text-white">DOGE / USDT</span>
          </div>
          <CandlestickChartOutlinedIcon
            style={{ font: "25", color: "#ffffff" }}
            className="m-4"
          />
        </div>
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
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-[#dddddd]">Time</p>
              <p className="text-xs">
                <DateTime />
              </p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <p className="text-[#dddddd] text-xs">Trading assets</p>
              <p className="text-[#dddddd] text-xs">USDT</p>
            </div>
            <div className="text-[#dddddd] text-xs flex justify-between mt-1">
              <p>Available amount</p>
              <p>0</p>
            </div>
            <div className="flex justify-left text-xs text-[#dddddd] mt-1">
              <p>Transaction Period</p>
            </div>
            <div className="flex flex-col mt-1">
              <select
                name=""
                id=""
                className="bg-[#242B34] rounded text-[#dddddd] text-xs py-2"
              >
                <option value="" className="text-xs">
                  30s - 20%
                </option>
                <option value="" className="text-xs">
                  60s - 30%
                </option>
                <option value="" className="text-xs">
                  120s - 50%
                </option>
                <option value="" className="text-xs">
                  24h - 60%
                </option>
                <option value="" className="text-xs">
                  72h - 80%
                </option>
                <option value="" className="text-xs">
                  7d - 90%
                </option>
                <option value="" className="text-xs">
                  15d - 100%
                </option>
              </select>
            </div>
            <div className="flex flex-row justify-between text-xs text-[#dddddd] mt-2">
              Amount
            </div>
            <div className="">
              <input
                type="text"
                className="text-[#dddddd] p-1 text-xs border border-[#35393F] rounded text-center mt-3 bg-[#0F1720] active:border-[#35393F]"
                placeholder="Enter quantity"
              />
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
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-xs text-white">Minimum buy </p>
              <p className="text-xs text-white">1000</p>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-xs text-white">Handling Fee</p>
              <p className="text-xs text-white">0.00</p>
            </div>

            <div className="flex flex-col mt-3 mb-3">
              <button
                className="text-white px-6 py-1 text-sm border border-[#313840] rounded bg-[#]"
                style={{
                  backgroundColor:
                    activeButton == "short" ? "#F36464" : "#04CF99",
                }}
              >
                {activeButton == "short" ? "Sell" : "Buy"}
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
            <div className="flex flex-row justify-between items-center text-white text-xs">
              <div className="p-4">Price (USDT)</div>
              <div className="p-4">Amount (BTC)</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="text-[#04CF99] ml-5">70710.75</div>
            <div className="text-[#04CF99] ml-5 text-xs">≈ 70710.75</div>

            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 mt-3 text-[#F36464]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
            <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
              <div className="ml-5">70725.71</div>
              <div className="mr-5">61</div>
            </div>
          </div>
        </div>
      </div>
      <Orders />
    </div>
  );
};

export default Trade;
