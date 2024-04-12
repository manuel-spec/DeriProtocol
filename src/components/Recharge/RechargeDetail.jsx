import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import QR1 from "../../assets/qrs/qr1.png";
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
              onClick={() => setActiveButton("ERC20")}
            >
              ERC20
            </button>
            <button
              className={`bg-[#272F37] px-3 py-1 rounded ml-2 ${
                activeButton == "TRC20" && "border border-[#F0C163]"
              }`}
              onClick={() => setActiveButton("TRC20")}
            >
              TRC20
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            {activeButton == "ERC20" && <img src={QR1} alt="" width={100} />}
            {activeButton == "TRC20" && <img src={QR2} alt="" width={100} />}
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Save QrCode
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              fi49r29fv992jnf88f3nn3k499dnnw2n3nv56c
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
            {activeButton == "ERC20" && <img src={QR1} alt="" width={100} />}
            {activeButton == "TRC20" && <img src={QR2} alt="" width={100} />}
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Save QrCode
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              fi49r29fv992jnf88f3nn3k499dnnw2n3nv56c
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
              onClick={() => setActiveButton("ERC20")}
            >
              BTC
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            {activeButton == "ERC20" && <img src={QR1} alt="" width={100} />}
            {activeButton == "TRC20" && <img src={QR2} alt="" width={100} />}
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Save QrCode
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              fi49r29fv992jnf88f3nn3k499dnnw2n3nv56c
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
              onClick={() => setActiveButton("ERC20")}
            >
              USDC
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            {activeButton == "ERC20" && <img src={QR1} alt="" width={100} />}
            {activeButton == "TRC20" && <img src={QR2} alt="" width={100} />}
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Save QrCode
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              fi49r29fv992jnf88f3nn3k499dnnw2n3nv56c
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
            {activeButton == "ERC20" && <img src={QR1} alt="" width={100} />}
            {activeButton == "TRC20" && <img src={QR2} alt="" width={100} />}
            <button className="bg-[#272F37] p-2 rounded mt-3">
              Save QrCode
            </button>
          </div>
          <div>
            <p className="text-white ml-2">Deposit address:</p>
          </div>
          <div>
            <p className="ml-2 text-xs">
              fi49r29fv992jnf88f3nn3k499dnnw2n3nv56c
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
