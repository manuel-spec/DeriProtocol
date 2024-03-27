import { useState } from "react";
import nodata from "../../assets/imgs/nodata.png";

const Orders = () => {
  const [activeButton, setActiveButton] = useState("orders");
  return (
    <div className="flex flex-col text-white bg-[#0F1720] mt-2">
      <div className="text-sm p-3 flex flex-row">
        <div className="flex flex-col ">
          <button
            onClick={() => {
              setActiveButton("orders");
            }}
          >
            Position Orders
          </button>
          <span
            className={
              activeButton == "orders" ? "border border-[#FEA453] w-10" : ""
            }
          ></span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="ml-3"
            onClick={() => {
              setActiveButton("records");
            }}
          >
            Order records
          </button>
          <span
            className={
              activeButton == "records" ? "border border-[#FEA453] w-10" : ""
            }
          ></span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white border-t p-20">
        <div>
          <img src={nodata} alt="" width={180} className="mb-3" />
        </div>
        <div>
          <p className="text-white mb-4">No data</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
