import { useState } from "react";
import Overview from "./Overview";

const Assets = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");
  return (
    <div>
      <div className="flex flex-row justify-center items-center text-[#dddddd]">
        <div className="p-2">
          <button
            onClick={() => {
              setActiveComponent("Overview");
            }}
          >
            Overview
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
      <div>{activeComponent == "Overview" && <Overview />}</div>
    </div>
  );
};

export default Assets;
