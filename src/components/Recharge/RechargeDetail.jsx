import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import btc from "../../assets/qrs/btc.jpg";
import eth from "../../assets/qrs/eth.jpg";
import usdc from "../../assets/qrs/usdc.jpg";
import dai from "../../assets/qrs/btc.jpg";

import QR1 from "../../assets/qrs/btc.jpg";
import QR2 from "../../assets/qrs/qr2.png";

const RechargeDetail = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("ERC20");
  return (
    <div className="text-white">
      {location.state.crypto == "USDT" && (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-white">
            <div>
              <Link to="/recharge/">
                <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-lg font-bold">Recharge</p>
            </div>
            <div> </div>
          </div>
          <div className="border-b-2 border-[#000000]">
            <div className="flex flex-row  m-3">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/825.png"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />

              <p className="text-white text-lg font-bold">
                {location.state.crypto}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold p-2">chain name:</p>
          </div>
          <div>
            <button
              className={`bg-[#272F37] px-3 py-1 rounded ml-2 ${
                activeButton == "ERC20" && "border border-[#F0C163]"
              }`}
            >
              USDT
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <img src={eth} alt="" width={150} />

            <button className="bg-[#272F37] p-2 rounded mt-3">
              Copy address
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              0x12001595b381a047a0bD34e830A237A17241b74E
            </p>
          </div>

          <div className="flex flex-col m-2 ">
            <button className="text-center rounded p-2 bg-[#F0C163]">
              Copy
            </button>
          </div>
          <div className="border-b-2 mt-2 border-[#000000]"></div>
          <div className="font-semibold">Important notice</div>
          <div className="text-[#dddddd] p-2 mb-20">
            <p className="text-xs mt-2">
              1. The above deposit address is the official payment address of
              the platform, please look for the official deposit address of the
              platform, and the loss of funds caused by incorrect charging shall
              be borne by yourself;
            </p>
            <p className="text-xs mt-2">
              2. Please make sure that your computer and browser are safe to
              prevent information from being tampered with or leaked;
            </p>
            <p className="text-xs mt-2">
              3. After you recharge the above address, you need to confirm the
              entire network node before it can be credited;
            </p>
            <p className="text-xs mt-2">
              4. Please select the above-mentioned token system and currency
              type and transfer the corresponding amount for deposit. Please do
              not transfer any other irrelevant assets, otherwise they will not
              be retrieved.
            </p>
          </div>
        </div>
      )}
      {/* ETH */}
      {location.state.crypto == "ETH" && (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-white">
            <div>
              <Link to="/recharge/">
                <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-lg font-bold">Recharge</p>
            </div>
            <div> </div>
          </div>
          <div className="border-b-2 border-[#000000]">
            <div className="flex flex-row m-3">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />

              <p className="text-white text-lg font-bold">
                {location.state.crypto}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold p-2">chain name:</p>
          </div>
          <div>
            <button
              className={`bg-[#272F37] px-3 py-1 rounded ml-2 ${
                activeButton == "ERC20" && "border border-[#F0C163]"
              }`}
              onClick={() => setActiveButton("ERC20")}
            >
              ETH
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            {activeButton == "ERC20" && <img src={eth} alt="" width={150} />}
            {activeButton == "TRC20" && <img src={eth} alt="" width={150} />}
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Copy address
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              0x12001595b381a047a0bD34e830A237A17241b74E
            </p>
          </div>

          <div className="flex flex-col m-2 ">
            <button className="text-center rounded p-2 bg-[#F0C163]">
              Copy
            </button>
          </div>
          <div className="border-b-2 mt-2 border-[#000000]"></div>
          <div className="font-semibold">Important notice</div>
          <div className="text-[#dddddd] p-2 mb-20">
            <p className="text-xs mt-2">
              1. The above deposit address is the official payment address of
              the platform, please look for the official deposit address of the
              platform, and the loss of funds caused by incorrect charging shall
              be borne by yourself;
            </p>
            <p className="text-xs mt-2">
              2. Please make sure that your computer and browser are safe to
              prevent information from being tampered with or leaked;
            </p>
            <p className="text-xs mt-2">
              3. After you recharge the above address, you need to confirm the
              entire network node before it can be credited;
            </p>
            <p className="text-xs mt-2">
              4. Please select the above-mentioned token system and currency
              type and transfer the corresponding amount for deposit. Please do
              not transfer any other irrelevant assets, otherwise they will not
              be retrieved.
            </p>
          </div>
        </div>
      )}
      {/* BTC */}
      {location.state.crypto == "BTC" && (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-white">
            <div>
              <Link to="/recharge/">
                <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-lg font-bold">Recharge</p>
            </div>
            <div> </div>
          </div>
          <div className="border-b-2 border-[#000000]">
            <div className="flex flex-row m-3">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />

              <p className="text-white text-lg font-bold">
                {location.state.crypto}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold p-2">chain name:</p>
          </div>
          <div>
            <button
              className={`bg-[#272F37] px-3 py-1 rounded ml-2 ${
                activeButton == "ERC20" && "border border-[#F0C163]"
              }`}
            >
              BTC
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <img src={QR1} alt="" width={150} />
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Copy address
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              bc1q07lajrj04cejkdlwesmzv6raenz0r23ef23r3p
            </p>
          </div>

          <div className="flex flex-col m-2 ">
            <button className="text-center rounded p-2 bg-[#F0C163]">
              Copy
            </button>
          </div>
          <div className="border-b-2 mt-2 border-[#000000]"></div>
          <div className="font-semibold">Important notice</div>
          <div className="text-[#dddddd] p-2 mb-20">
            <p className="text-xs mt-2">
              1. The above deposit address is the official payment address of
              the platform, please look for the official deposit address of the
              platform, and the loss of funds caused by incorrect charging shall
              be borne by yourself;
            </p>
            <p className="text-xs mt-2">
              2. Please make sure that your computer and browser are safe to
              prevent information from being tampered with or leaked;
            </p>
            <p className="text-xs mt-2">
              3. After you recharge the above address, you need to confirm the
              entire network node before it can be credited;
            </p>
            <p className="text-xs mt-2">
              4. Please select the above-mentioned token system and currency
              type and transfer the corresponding amount for deposit. Please do
              not transfer any other irrelevant assets, otherwise they will not
              be retrieved.
            </p>
          </div>
        </div>
      )}
      {/* USDC */}
      {location.state.crypto == "USDC" && (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-white">
            <div>
              <Link to="/recharge/">
                <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-lg font-bold">Recharge</p>
            </div>
            <div> </div>
          </div>
          <div className="border-b-2 border-[#000000]">
            <div className="flex flex-row m-3">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/3408.png"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />

              <p className="text-white text-lg font-bold">
                {location.state.crypto}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold p-2">chain name:</p>
          </div>
          <div>
            <button
              className={`bg-[#272F37] px-3 py-1 rounded ml-2 ${
                activeButton == "ERC20" && "border border-[#F0C163]"
              }`}
            >
              USDC
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <img src={usdc} alt="" width={150} />
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Copy address
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">TRgBq6dwpXsTCk28v9bPGHCvez2pzFo6Cw</p>
          </div>

          <div className="flex flex-col m-2 ">
            <button className="text-center rounded p-2 bg-[#F0C163]">
              Copy
            </button>
          </div>
          <div className="border-b-2 mt-2 border-[#000000]"></div>
          <div className="font-semibold">Important notice</div>
          <div className="text-[#dddddd] p-2 mb-20">
            <p className="text-xs mt-2">
              1. The above deposit address is the official payment address of
              the platform, please look for the official deposit address of the
              platform, and the loss of funds caused by incorrect charging shall
              be borne by yourself;
            </p>
            <p className="text-xs mt-2">
              2. Please make sure that your computer and browser are safe to
              prevent information from being tampered with or leaked;
            </p>
            <p className="text-xs mt-2">
              3. After you recharge the above address, you need to confirm the
              entire network node before it can be credited;
            </p>
            <p className="text-xs mt-2">
              4. Please select the above-mentioned token system and currency
              type and transfer the corresponding amount for deposit. Please do
              not transfer any other irrelevant assets, otherwise they will not
              be retrieved.
            </p>
          </div>
        </div>
      )}
      {/* DAI */}
      {location.state.crypto == "DAI" && (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-white">
            <div>
              <Link to="/recharge/">
                <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-lg font-bold">Recharge</p>
            </div>
            <div> </div>
          </div>
          <div className="border-b-2 border-[#000000]">
            <div className="flex flex-row m-3">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/32x32/4943.png"
                alt=""
                width={25}
                className="mr-2 ml-2"
              />

              <p className="text-white text-lg font-bold">
                {location.state.crypto}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold p-2">chain name:</p>
          </div>
          <div>
            <button
              className={`bg-[#272F37] px-3 py-1 rounded ml-2 ${
                activeButton == "ERC20" && "border border-[#F0C163]"
              }`}
              onClick={() => setActiveButton("ERC20")}
            >
              DAI
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <img src={dai} alt="" width={150} />
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Copy address
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              0x12001595b381a047a0bD34e830A237A17241b74E
            </p>
          </div>

          <div className="flex flex-col m-2 ">
            <button className="text-center rounded p-2 bg-[#F0C163]">
              Copy
            </button>
          </div>
          <div className="border-b-2 mt-2 border-[#000000]"></div>
          <div className="font-semibold">Important notice</div>
          <div className="text-[#dddddd] p-2 mb-20">
            <p className="text-xs mt-2">
              1. The above deposit address is the official payment address of
              the platform, please look for the official deposit address of the
              platform, and the loss of funds caused by incorrect charging shall
              be borne by yourself;
            </p>
            <p className="text-xs mt-2">
              2. Please make sure that your computer and browser are safe to
              prevent information from being tampered with or leaked;
            </p>
            <p className="text-xs mt-2">
              3. After you recharge the above address, you need to confirm the
              entire network node before it can be credited;
            </p>
            <p className="text-xs mt-2">
              4. Please select the above-mentioned token system and currency
              type and transfer the corresponding amount for deposit. Please do
              not transfer any other irrelevant assets, otherwise they will not
              be retrieved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargeDetail;
