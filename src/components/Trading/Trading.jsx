import { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import Drawer from "@mui/material/Drawer";
import Orders from "./Orders";
import DateTime from "./Datetime";
import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

const Trade = () => {
    const [user, setUser] = useState({});
    const [buySell, setBuySell] = useState();
    const [tradeTime, setTradeTime] = useState();
    const [tradeAmount, setTradeAmount] = useState();
    const [transactionPeriod, setTransactionPeriod] = useState();
    const [tradePercent, setTradePercent] = useState("30 - 20");
    const [open, setOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("long");
    const [btcData, setBtcData] = useState(null);
    const [ethData, setEthData] = useState(null);
    const [xrpData, setXrpData] = useState(null);
    const location = useLocation();
    var [date, setDate] = useState(new Date());
    const [profitStatus, setProfitStatus] = useState();

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    useEffect(() => {
        const apiCall = async () => {
            const cookies = new Cookies();

            const decoded = jwtDecode(cookies.get("jwt"));
            const responce = await Axios.get(
                `https://base.tradentra.io/api/user/${decoded["user_id"]}`
            ).then((res) => setUser(res.data));
        };

        apiCall();
        setProfitStatus(user["Profit"]);
    }, []);

    const POSTApi = async () => {
        const cookies = new Cookies();
        const decoded = jwtDecode(cookies.get("jwt"));
        console.log(decoded);
        const form = {
            user: decoded["user_id"],
            token_name: active,
            trade_amount: tradeAmount,
            trade_time: activeButton == "short" ? 1 : 0,
            trade_percent: tradePercent,
            trade_action: activeButton,
        };

        const responce = await Axios.post(
            `https://base.tradentra.io/api/order/create/`,
            form
        ).then((res) => window.location.reload());
    };
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
    const [coinPrice, setCoinPrice] = useState(0.0);
    useEffect(() => {
        const ws = new WebSocket(
            `wss://stream.binance.com:9443/ws/${active.toLocaleLowerCase()}usdt@trade`
        );
        ws.onmessage = (event) => {
            setBtcData(JSON.parse(event.data));
            setCoinPrice(parseFloat(JSON.parse(event.data).p));
            // console.log(event.data);
        };

        // console.log(active.toLocaleLowerCase());
        return () => {
            ws.close();
        };
    }, [active, location]);

    // console.log();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    let randomDecimal = 0;
    useEffect(() => {
        const min = -5;
        const max = 5;
        const diff = max - min;
        randomDecimal = Math.random() * diff + min;
    }, [btcData]);

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
                        {open && (
                            <Drawer open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </Drawer>
                        )}

                        <div className="flex flex-row">
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
                <div className="flex flex-row justify-between bg-[#0F1720]">
                    <form
                        action="/trade"
                        method="post"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex flex-col mt-5 ml-3">
                            <div className="flex flex-row text-white p-2">
                                <button
                                    className="px-6 py-1 text-sm border border-[#313840] rounded bg-[#]"
                                    onClick={() => {
                                        setActiveButton("long");
                                    }}
                                    style={{
                                        backgroundColor:
                                            activeButton == "long"
                                                ? "#04CF99"
                                                : "",
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
                                        backgroundColor:
                                            activeButton == "short"
                                                ? "#F36464"
                                                : "",
                                    }}
                                >
                                    Sell
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-xs text-[#dddddd]">Time</p>
                                <div className="text-xs">
                                    <DateTime />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <p className="text-[#dddddd] text-xs">
                                    Trading assets
                                </p>
                                <p className="text-[#dddddd] text-xs">USDT</p>
                            </div>
                            <div className="text-[#dddddd] text-xs flex justify-between mt-1">
                                <p>Available amount</p>
                                <p>{user[`${active}_Balance`]}</p>
                            </div>
                            <div className="flex justify-left text-xs text-[#dddddd] mt-1">
                                <p>Transaction Period</p>
                            </div>
                            <div className="flex flex-col mt-1">
                                <select
                                    name=""
                                    id=""
                                    className="bg-[#242B34] rounded text-[#dddddd] text-xs py-2"
                                    value={tradePercent}
                                    onChange={(e) => {
                                        setTradePercent(e.target.value);
                                        console.log(tradePercent);
                                    }}
                                >
                                    <option value="30 - 20" className="text-xs">
                                        30s - 20%
                                    </option>
                                    <option value="60 - 30" className="text-xs">
                                        60s - 30%
                                    </option>
                                    <option
                                        value="120 - 50"
                                        className="text-xs"
                                    >
                                        120s - 50%
                                    </option>
                                    <option value="24 - 60" className="text-xs">
                                        24h - 60%
                                    </option>
                                    <option value="72 - 80" className="text-xs">
                                        72h - 80%
                                    </option>
                                    <option value="7 - 90" className="text-xs">
                                        7d - 90%
                                    </option>
                                    <option
                                        value="15 - 100"
                                        className="text-xs"
                                    >
                                        15d - 100%
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-row justify-between text-xs text-[#dddddd] mt-2">
                                Amount
                            </div>
                            <div className="">
                                <input
                                    type="number"
                                    value={tradeAmount}
                                    onChange={(e) => {
                                        if (
                                            user[`${active}_Balance`] >
                                            e.target.value
                                        ) {
                                            setTradeAmount(e.target.value);
                                        } else {
                                            setTradeAmount(0);
                                        }
                                    }}
                                    className="text-[#dddddd] p-1 text-xs border border-[#35393F] rounded text-center mt-3 bg-[#0F1720] active:border-[#35393F]"
                                    placeholder="Enter quantity"
                                />
                            </div>
                            <div className="flex flex-row text-xs text-[#dddddd] mt-2">
                                <div className="text-[#35393F] border rounded px-1 border-[#35393F]">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTradeAmount(
                                                parseFloat(
                                                    user[`${active}_Balance`]
                                                ) * 0.25
                                            );
                                        }}
                                    >
                                        25%
                                    </button>
                                </div>
                                <div className="text-[#35393F] ml-1 border rounded px-1 border-[#35393F]">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTradeAmount(
                                                parseFloat(
                                                    user[`${active}_Balance`]
                                                ) * 0.5
                                            );
                                        }}
                                    >
                                        50%
                                    </button>
                                </div>
                                <div className="text-[#35393F] ml-1 border rounded px-1 border-[#35393F]">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTradeAmount(
                                                parseFloat(
                                                    user[`${active}_Balance`]
                                                ) * 0.75
                                            );
                                        }}
                                    >
                                        75%
                                    </button>
                                </div>
                                <div className="text-[#35393F] ml-1 border rounded px-1 border-[#35393F]">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTradeAmount(
                                                parseFloat(
                                                    user[`${active}_Balance`]
                                                )
                                            );
                                        }}
                                    >
                                        100%
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center mt-2">
                                <p className="text-xs text-white">
                                    Minimum buy{" "}
                                </p>
                                <p className="text-xs text-white">1000</p>
                            </div>
                            <div className="flex flex-row justify-between items-center mt-2">
                                <p className="text-xs text-white">
                                    Handling Fee
                                </p>
                                <p className="text-xs text-white">0.00</p>
                            </div>

                            <div className="flex flex-col mt-3 mb-3">
                                <button
                                    type="submit"
                                    onClick={() => {
                                        if (tradeAmount > 0) {
                                            POSTApi();
                                        } else {
                                            alert(
                                                "please deposit into your account first"
                                            );
                                        }
                                    }}
                                    className="text-white px-6 py-1 text-sm border border-[#313840] rounded bg-[#]"
                                    style={{
                                        backgroundColor:
                                            activeButton == "short"
                                                ? "#F36464"
                                                : "#04CF99",
                                    }}
                                >
                                    {activeButton == "short" ? "Sell" : "Buy"}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col mt-2 ">
                        <div className="flex flex-row justify-between items-center text-white text-xs">
                            <div className="p-3">Price (USDT)</div>
                            <div className="p-3">Amount ({active})</div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
                            <div className="ml-5 text-[#04CF99]">
                                <p className="">
                                    {btcData
                                        ? (
                                              parseFloat(btcData.p) + 0.02
                                          ).toFixed(2)
                                        : "--"}
                                </p>
                            </div>
                            <div className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 6.3).toFixed(2)
                                    : "--"}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
                            <div className="ml-5 text-[#04CF99]">
                                {btcData
                                    ? (parseFloat(btcData.p) - 0.02).toFixed(2)
                                    : "--"}
                            </div>
                            <p className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 2.6).toFixed(2)
                                    : "--"}
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
                            <div className="ml-5 text-[#04CF99]">
                                {btcData
                                    ? (parseFloat(btcData.p) + 0.04).toFixed(2)
                                    : "--"}
                            </div>
                            <p className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 4.5).toFixed(2)
                                    : "--"}
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
                            <div className="ml-5 text-[#04CF99]">
                                {btcData
                                    ? (parseFloat(btcData.p) + 0.02).toFixed(2)
                                    : "--"}
                            </div>
                            <p className="mr-5">
                                {" "}
                                <p className="mr">
                                    {btcData
                                        ? (parseFloat(btcData.q) + 6).toFixed(2)
                                        : "--"}
                                </p>
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#04CF99]">
                            <div className="ml-5 text-[#04CF99]">
                                {btcData
                                    ? (parseFloat(btcData.p) + 0.2).toFixed(2)
                                    : "--"}
                            </div>
                            <p className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 4).toFixed(2)
                                    : "--"}
                            </p>
                        </div>
                        <div className="ml-5 text-[#04CF99]">
                            <p>
                                {" "}
                                {btcData
                                    ? parseFloat(btcData.p).toFixed(2)
                                    : "--"}
                            </p>
                        </div>

                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
                            <div className="ml-5 text-[#F36464]">
                                <p>
                                    {" "}
                                    {btcData
                                        ? (
                                              parseFloat(btcData.p) - 0.04
                                          ).toFixed(2)
                                        : "--"}
                                </p>
                            </div>
                            <div className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 2.9).toFixed(2)
                                    : "--"}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
                            <div className="ml-5 text-[#F36464]">
                                {btcData
                                    ? (parseFloat(btcData.p) - 0.02).toFixed(2)
                                    : "--"}
                            </div>
                            <div className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 2.7).toFixed(2)
                                    : "--"}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
                            <div className="ml-5 text-[#F36464]">
                                {btcData
                                    ? (parseFloat(btcData.p) - 0.01).toFixed(2)
                                    : "--"}
                            </div>
                            <div className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 1.9).toFixed(2)
                                    : "--"}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
                            <div className="ml-5 text-[#F36464]">
                                {btcData
                                    ? (parseFloat(btcData.p) - 0.12).toFixed(2)
                                    : "--"}
                            </div>
                            <div className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 2.2).toFixed(2)
                                    : "--"}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-white text-xs mb-2 text-[#F36464]">
                            <div className="ml-5 text-[#F36464]">
                                {btcData
                                    ? (parseFloat(btcData.p) - 20).toFixed(2)
                                    : "--"}
                            </div>
                            <div className="mr-5">
                                {btcData
                                    ? (parseFloat(btcData.q) + 1).toFixed(2)
                                    : "--"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Orders
                active={active}
                user={user}
                coinPrice={coinPrice}
                profitStatus={profitStatus}
            />
        </div>
    );
};

export default Trade;
