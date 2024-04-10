import { useEffect, useState } from "react";
import nodata from "../../assets/imgs/nodata.png";
import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CountDown from "./../Countdown";

const Orders = ({ active, user }) => {
  const [orders, setOrders] = useState([]);
  // console.log(orders);
  const [ordersDone, setDoneOrders] = useState(null);
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
        // console.log(orders);
      });
      const responce_done = await Axios.post(
        "http://127.0.0.1:8000/api/order/listed/",
        {
          pk: decoded["user_id"],
        }
      ).then((res) => {
        // console.log(res);
        setDoneOrders(res.data);
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
      {activeButton == "orders" && orders.length == 0 && (
        <div className="flex flex-col justify-center items-center text-white border-t p-20">
          <div>
            <img src={nodata} alt="" width={180} className="mb-3" />
          </div>
          <div>
            <p className="text-white mb-4">No data</p>
          </div>
        </div>
      )}
      {activeButton == "records" && ordersDone.length == 0 && (
        <div className="flex flex-col justify-center items-center text-white border-t p-20">
          <div>
            <img src={nodata} alt="" width={180} className="mb-3" />
          </div>
          <div>
            <p className="text-white mb-4">No data</p>
          </div>
        </div>
      )}
      {orders != null && activeButton == "orders" && (
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
                <div className=" flex flex-row ">
                  <AccessAlarmIcon className="mr-2" />
                  {parseInt(item.trade_percent.substring(0, 2)) === 20 && (
                    <CountDown
                      Seconds={parseInt(item.trade_percent.substring(0, 2))}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 2)) === 30 && (
                    <CountDown
                      Seconds={parseInt(item.trade_percent.substring(0, 2))}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 2)) === 60 && (
                    <CountDown
                      Seconds={parseInt(item.trade_percent.substring(0, 2))}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 3)) === 120 && (
                    <CountDown
                      Seconds={parseInt(item.trade_percent.substring(0, 2))}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 2)) === 7 && (
                    <CountDown
                      Seconds={604800}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 2)) === 24 && (
                    <CountDown
                      Seconds={2073600}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 2)) === 72 && (
                    <CountDown
                      Seconds={6220800}
                      id={index}
                      item={item.id}
                      order={item}
                      user={user}
                    />
                  )}
                  {parseInt(item.trade_percent.substring(0, 2)) === 15 && (
                    <CountDown
                      Seconds={31104000}
                      id={index}
                      item={item.id}
                      order={item}
                      active={active}
                      user={user}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {ordersDone != null && activeButton == "records" && (
        <div className="">
          {ordersDone.map((item, index) => (
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
