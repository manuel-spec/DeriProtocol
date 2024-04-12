import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router-dom";

const Recharge = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between text-white">
        <div>
          <Link to="/">
            <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-bold">Recharge</p>
        </div>
        <div> </div>
      </div>
      <div className="text-white text-xs text-center mt-2">
        Please Select the cryptocurrency you want to deposit:
      </div>
      <div className="flex flex-col text-white mt-5">
        <div
          className="flex flex-row p-2 border-b border-t border-[#000000] flex justify-between"
          onClick={() =>
            navigate("/recharge/details/", { state: { crypto: "USDT" } })
          }
        >
          <div className="flex flex-row">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/825.png"
              alt=""
              width={25}
              className="mr-2 ml-2"
            />
            <p>USDT</p>
          </div>
          <div>
            <ArrowForwardIosIcon style={{ fontSize: 15 }} />
          </div>
        </div>
        <div
          className="p-2 border-b border-[#000000] flex flex-row justify-between"
          onClick={() =>
            navigate("/recharge/details/", { state: { crypto: "ETH" } })
          }
        >
          <div className="flex flex-row">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
              alt=""
              width={25}
              className="mr-2 ml-2"
            />
            <p>ETH</p>
          </div>

          <div>
            <ArrowForwardIosIcon style={{ fontSize: 15 }} />
          </div>
        </div>
        <div
          className="p-2 border-b border-[#000000] flex flex-row justify-between"
          onClick={() =>
            navigate("/recharge/details/", { state: { crypto: "BTC" } })
          }
        >
          <div className="flex flex-row">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"
              alt=""
              width={25}
              className="mr-2 ml-2"
            />
            <p>BTC</p>
          </div>
          <div>
            <ArrowForwardIosIcon style={{ fontSize: 15 }} />
          </div>
        </div>
        <div
          className="p-2 border-b border-[#000000] flex flex-row justify-between"
          onClick={() =>
            navigate("/recharge/details/", { state: { crypto: "USDC" } })
          }
        >
          <div className="flex flex-row">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/3408.png"
              alt=""
              width={25}
              className="mr-2 ml-2"
            />
            <p>USDC</p>
          </div>
          <div>
            <ArrowForwardIosIcon style={{ fontSize: 15 }} />
          </div>
        </div>
        <div
          className="p-2 border-b  border-[#000000] flex flex-row justify-between"
          onClick={() =>
            navigate("/recharge/details/", { state: { crypto: "DAI" } })
          }
        >
          <div className="flex flex-row">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/4943.png"
              alt=""
              width={25}
              className="mr-2 ml-2"
            />
            <p>DAI</p>
          </div>
          <div>
            <ArrowForwardIosIcon style={{ fontSize: 15 }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <div className="text-white font-bold mt-3 border-b-2 border-[#000000] p-2">
          <p className="ml-2">offsite links</p>
        </div>
        <a href="http://www.gemini.com">
          <div className="flex flex-row p-2 border-b border-[#000000] flex justify-between">
            <div className="flex flex-row">
              <img
                src="https://www.gemini.com/favicon.ico"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />
              <p>Gemini</p>
            </div>
            <a href="http://www.gemini.com">
              <div>
                <ArrowForwardIosIcon style={{ fontSize: 15 }} />
              </div>
            </a>
          </div>
        </a>
        <div className="flex flex-row p-2 border-b border-[#000000] flex justify-between">
          <a href="https://www.coinbase.com/">
            <div className="flex flex-row">
              <img
                src="https://assets.coinbase.com/exchange/favicon-new.ico"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />
              <p>Coinbase</p>
            </div>
          </a>
          <a href="https://www.coinbase.com/">
            <div>
              <ArrowForwardIosIcon style={{ fontSize: 15 }} />
            </div>
          </a>
        </div>

        <div className="flex flex-row p-2 border-b border-[#000000] flex justify-between">
          <a href="https://www.kraken.com/">
            <div className="flex flex-row">
              <img
                src="https://www.kraken.com/favicon.ico"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />
              <p>Kraken</p>
            </div>
          </a>
          <a href="https://www.kraken.com/">
            <div>
              <ArrowForwardIosIcon style={{ fontSize: 15 }} />
            </div>
          </a>
        </div>
        <div className="flex flex-row p-2 border-b border-[#000000] flex justify-between">
          <a href="https://shakepay.com/">
            <div className="flex flex-row">
              <img
                src="https://shakepay.com/favicon.ico"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />
              <p>Sharkpay</p>
            </div>
          </a>
          <a href="https://shakepay.com/">
            <div>
              <ArrowForwardIosIcon style={{ fontSize: 15 }} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
