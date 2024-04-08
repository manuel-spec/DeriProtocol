import { useEffect, useState } from "react";
import nodata from "../../assets/imgs/nodata.png";
import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Orders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const apiCall = async () => {
      const cookies = new Cookies();
      const token = cookies.get("jwt");
      const decoded = jwtDecode(token);

      const responce = await Axios.post(
        "http://127.0.0.1:8000/api/order/list/",
        {
          pk: decoded["user_id"],
        }
      ).then((res) => {
        setOrders(res.data);
        console.log(orders);
      });
    };
    apiCall();
  }, []);

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
      {orders == null && (
        <div className="flex flex-col justify-center items-center text-white border-t p-20">
          <div>
            <img src={nodata} alt="" width={180} className="mb-3" />
          </div>
          <div>
            <p className="text-white mb-4">No data</p>
          </div>
        </div>
      )}
      {orders && activeButton == "orders" && (
        <div className="mb-20">
          {orders.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between align-center text-white p-2 ml-3 text-sm"
            >
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p>Token Name:</p>
                  <p className="text-sm">{item.token_name}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-sm">Trade amount:</p>
                  <p className="text-sm ml-2">
                    {item.trade_amount}
                    {item.token_name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm">Trade time</div>
                <div>
                  <AccessAlarmIcon className="mr-3" />
                  {item.trade_percent}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
