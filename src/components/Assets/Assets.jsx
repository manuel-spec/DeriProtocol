import { useState } from "react";
import Overview from "./Overview";
import Exchange from "./Exchange";
import Trade from "./Trade";
import Perpetual from "./Perpetual";
import Finance from "./Finance";

const Assets = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");
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
      <div>{activeComponent == "Overview" && <Overview />}</div>
      <div>{activeComponent == "Exchange" && <Exchange />}</div>
      <div>{activeComponent == "Trade" && <Trade />}</div>
      <div>{activeComponent == "Perpetual" && <Perpetual />}</div>
      <div>{activeComponent == "Finance" && <Finance />}</div>
    </div>
  );
};

export default Assets;
