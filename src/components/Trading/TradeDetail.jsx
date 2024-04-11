import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TradeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tradeDetail, setTradeDetail] = useState();

  useEffect(() => {
    if (!location.state) {
      navigate("/trade");
      return;
    }
    setTradeDetail(location.state.item);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-2xl text-center font-bold border-b border-gray-700 pb-2">
          Trade Details
        </h1>
      </div>
      {tradeDetail && (
        <div className="bg-gray-800 rounded-lg shadow-md px-4 py-6 border border-gray-700">
          {/* Trade Token */}
          <div className="flex flex-row justify-between  p-2 text-[#787B7F]">
            {tradeDetail["token_name"] == "BTC" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "ETH" && (
              <div className="flex flex-row">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
                  alt=""
                />
                <p className=" mt-1 ml-2 text-white">
                  {tradeDetail["token_name"]}
                </p>
              </div>
            )}
            {tradeDetail["token_name"] == "SOL" && (
              <div className="flex flex-row">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/32x32/5426.png"
                  alt=""
                />
                <p className=" mt-1 ml-2 text-white">
                  {tradeDetail["token_name"]}
                </p>
              </div>
            )}
            {tradeDetail["token_name"] == "DOT" && (
              <div className="flex flex-row">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/32x32/6636.png"
                  alt=""
                />
                <p className=" mt-1 ml-2 text-white">
                  {tradeDetail["token_name"]}
                </p>
              </div>
            )}
            {tradeDetail["token_name"] == "XRP" && (
              <div className="flex flex-row">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/32x32/52.png"
                  alt=""
                />
                <p className=" mt-1 ml-2 text-white">
                  {tradeDetail["token_name"]}
                </p>
              </div>
            )}
            {tradeDetail["token_name"] == "USDC" && (
              <div className="flex flex-row">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/32x32/3408.png"
                  alt=""
                />
                <p className=" mt-1 ml-2 text-white">
                  {tradeDetail["token_name"]}
                </p>
              </div>
            )}
            {tradeDetail["token_name"] == "DOGE" && (
              <div className="flex flex-row">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/32x32/74.png"
                  alt=""
                />
                <p className=" mt-1 ml-2 text-white">
                  {tradeDetail["token_name"]}
                </p>
              </div>
            )}
            {tradeDetail["token_name"] == "LINK" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1975.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "BCH" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "ADA" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/2010.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "EOS" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "DASH" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/131.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "FIL" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/2280.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "ZEC" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1437.png"
                alt=""
              />
            )}
            {tradeDetail["token_name"] == "LTC" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/2.png"
                alt=""
              />
            )}
          </div>
          {/* Other Trade Details */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between border-b border-gray-700 p-2">
              <p className="text-white text-base font-medium">Trade ID:</p>
              <p className="text-white text-base font-medium">
                {tradeDetail["id"]}
              </p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 p-2">
              <p className="text-white text-base font-medium">
                Trade Price Amount:
              </p>
              <p className="text-white text-base font-medium">
                {tradeDetail["trade_amount"]}
              </p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 p-2">
              <p className="text-white text-base font-medium">
                Trade Profit Percentage:
              </p>
              <p className="text-white text-base font-medium">
                {tradeDetail["trade_percent"].slice(-2)} %
              </p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 p-2">
              <p className="text-white text-base font-medium">Trade Time:</p>
              <p className="text-white text-base font-medium">
                {tradeDetail["trade_time"]}
              </p>
            </div>
            <div className="flex items-center justify-between p-2">
              <p className="text-white text-base font-medium">
                Trade Owner ID:
              </p>
              <p className="text-white text-base font-medium">
                {tradeDetail["user"]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeDetail;
