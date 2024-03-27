import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import Drawer from "@mui/material/Drawer";
import Orders from "./Orders";

const Perpetual = () => {
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
              69702.92
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
              >
                {activeButton == "short" ? "Buy Short" : "Buy Long"}
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

export default Perpetual;
