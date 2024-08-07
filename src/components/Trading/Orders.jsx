import { useEffect, useState } from "react";
import nodata from "../../assets/imgs/nodata.png";
import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CountDown from "./../Countdown";
import { Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Orders = ({ active, user, coinPrice, profitStatus }) => {
    const [orders, setOrders] = useState([]);
    const [ordersDone, setDoneOrders] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const apiCall = async () => {
            const cookies = new Cookies();
            const token = cookies.get("jwt");
            const decoded = jwtDecode(token);

            const responce = await Axios.post(
                "https://base.tradentra.io/api/order/list/",
                {
                    pk: decoded["user_id"],
                }
            ).then((res) => {
                setOrders(res.data);
                // console.log(orders);
            });
            const responce_done = await Axios.post(
                "https://base.tradentra.io/api/order/listed/",
                {
                    pk: decoded["user_id"],
                }
            ).then((res) => {
                // console.log(res);
                console.log(res.data);
                setDoneOrders(res.data);
            });
        };
        apiCall();
    }, []);

    const [activeButton, setActiveButton] = useState("orders");
    const [openModal, setModalOpen] = useState(false);

    return (
        <div className="flex flex-col text-white bg-[#0F1720] mt-2">
            <div className="text-sm p-3 flex flex-row">
                <div className="flex flex-col ">
                    <button
                        onClick={() => {
                            setActiveButton("orders");
                        }}
                    >
                        PositionOrders
                    </button>
                    <span
                        className={
                            activeButton == "orders"
                                ? "border border-[#FEA453] w-10 ml-5"
                                : ""
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
                            activeButton == "records"
                                ? "border border-[#FEA453] w-10"
                                : ""
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
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 20 && (
                                        <CountDown
                                            Seconds={parseInt(
                                                item.trade_percent.substring(
                                                    0,
                                                    2
                                                )
                                            )}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 30 && (
                                        <CountDown
                                            Seconds={parseInt(
                                                item.trade_percent.substring(
                                                    0,
                                                    2
                                                )
                                            )}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 60 && (
                                        <CountDown
                                            Seconds={parseInt(
                                                item.trade_percent.substring(
                                                    0,
                                                    2
                                                )
                                            )}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 3)
                                    ) === 120 && (
                                        <CountDown
                                            Seconds={parseInt(
                                                item.trade_percent.substring(
                                                    0,
                                                    2
                                                )
                                            )}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 7 && (
                                        <CountDown
                                            Seconds={604800}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 24 && (
                                        <CountDown
                                            Seconds={2073600}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 72 && (
                                        <CountDown
                                            Seconds={6220800}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                    {parseInt(
                                        item.trade_percent.substring(0, 2)
                                    ) === 15 && (
                                        <CountDown
                                            Seconds={31104000}
                                            id={index}
                                            item={item.id}
                                            order={item}
                                            active={active}
                                            user={user}
                                            coinPrice={coinPrice}
                                            profitStatus={profitStatus}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {ordersDone != null && activeButton == "records" && (
                <div className="mb-20">
                    {ordersDone.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row justify-between align-center text-white p-2 ml-3 text-sm"
                            onClick={() => setModalOpen(!open)}
                        >
                            <div
                                className="flex flex-col"
                                onClick={() =>
                                    navigate("/trade/details", {
                                        state: { item: item },
                                    })
                                }
                            >
                                <div className="flex flex-row">
                                    <p>Token Name:</p>
                                    <p className="text-sm">{item.token_name}</p>
                                    <button onClick={() => setModalOpen(true)}>
                                        detail
                                    </button>
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
