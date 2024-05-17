import { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom/dist";

const CoinGraph = () => {
    const location = useLocation();
    const [btcData, setBtcData] = useState(null);
    const [ethData, setEthData] = useState(null);
    const [xrpData, setXrpData] = useState(null);
    const [btcStat, setBtcStat] = useState(null);
    const [ethStat, setEthStat] = useState(null);
    const [xrpStat, setXrpStat] = useState(null);
    useEffect(() => {
        const ws = new WebSocket(
            "wss://stream.binance.com:9443/ws/btcusdt@trade"
        );
        ws.onmessage = (event) => {
            setBtcData(JSON.parse(event.data));
        };
        const ws1 = new WebSocket(
            "wss://stream.binance.com:9443/ws/ethusdt@trade"
        );
        ws1.onmessage = (event) => {
            setEthData(JSON.parse(event.data));
        };
        const ws2 = new WebSocket(
            "wss://stream.binance.com:9443/ws/xrpusdt@trade"
        );
        ws2.onmessage = (event) => {
            setXrpData(JSON.parse(event.data));
        };
    }, [location]);
    useEffect(() => {
        Axios.get("https://uapi.universe-safepal.site/api/coins/").then(
            (res) => {
                setBtcStat(res.data[0]["price_change_percentage_24h"]);
                setEthStat(res.data[1]["price_change_percentage_24h"]);
                setXrpStat(res.data[7]["price_change_percentage_24h"]);
            }
        );
    });

    return (
        <div
            className="flex flex-row bg-[#0F1720]"
            style={{ padding: "1.07143rem 1.07143rem .71429rem" }}
        >
            <div className="flex flex-col ">
                <div className="flex flex-row text-xs text-white">
                    <div>BTC/USDT</div>
                    <div className="ml-1 bg-lime-600">
                        {btcStat && parseFloat(btcStat).toFixed2}%
                    </div>
                </div>
                <div className="text-emerald-500 text-center">
                    {btcData ? parseFloat(btcData.p).toFixed(2) : "--"}
                </div>
                <div className="ml-1">
                    <img
                        src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
                        alt=""
                        className=""
                    />
                </div>
            </div>
            <div className="flex flex-col  text-xs text-white ">
                <div className="flex flex-row">
                    <p>ETH/USDT</p>
                    <p className="ml-1 bg-lime-600">
                        {ethStat && parseFloat(ethStat).toFixed(2)} %
                    </p>
                </div>
                <div className=" text-emerald-500  text-center text-lg">
                    {ethData ? parseFloat(ethData.p).toFixed(2) : "--"}
                </div>
                <div className="ml-1">
                    <img
                        src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col  text-xs text-white ">
                <div className="flex flex-row">
                    <p>TRX/USDT</p>
                    <p className="ml-1 bg-lime-600">
                        {xrpStat && parseFloat(xrpStat).toFixed(2)} %
                    </p>
                </div>
                <div>
                    <div className=" text-emerald-500 text-center text-lg">
                        {xrpData ? parseFloat(xrpData.p).toFixed(2) : "--"}
                    </div>
                    <div className="ml-1">
                        <img
                            src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinGraph;
