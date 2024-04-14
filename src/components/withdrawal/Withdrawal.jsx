import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Cookies from "universal-cookie";

const Withdrawal = () => {
  const [activeCrypto, setActiveCrypto] = useState("USDT");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("jwt");

  useEffect(() => {
    if (token == null) {
      navigate("/auth/signin/");
    }
  }, []);
  return (
    <div>
      <div className="flex flex-row justify-between text-white">
        <div>
          <Link to="/">
            <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-bold">Withdrawal</p>
        </div>
        <div> </div>
      </div>
      <div className="flex flex-row justify-between text-white p-5 border-b-2 border-[#000000]">
        <div className="flex flex-row ">
          {activeCrypto == "USDT" && (
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/825.png"
              alt=""
              className="mr-2 ml-2"
            />
          )}
          {activeCrypto == "ETH" && (
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
              alt=""
              className="mr-2 ml-2"
            />
          )}
          {activeCrypto == "BTC" && (
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"
              alt=""
              className="mr-2 ml-2"
            />
          )}
          {activeCrypto == "USDC" && (
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/3408.png"
              alt=""
              className="mr-2 ml-2"
            />
          )}
          {activeCrypto == "DAI" && (
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/32x32/4943.png"
              alt=""
              className="mr-2 ml-2"
            />
          )}
          <p className="m-1">{activeCrypto}</p>
        </div>

        <select name="" id="" className="rounded-lg px-3 bg-[#1E2229]">
          <option value="" onClick={() => setActiveCrypto("USDT")}>
            USDT
          </option>
          <option value="" onClick={() => setActiveCrypto("ETH")}>
            ETH
          </option>
          <option value="" onClick={() => setActiveCrypto("BTC")}>
            BTC
          </option>
          <option value="" onClick={() => setActiveCrypto("USDC")}>
            USDC
          </option>
          <option value="" onClick={() => setActiveCrypto("DAI")}>
            DAI
          </option>
        </select>
      </div>
      <div className="text-white  flex flex-row">
        <p className="px-3 py-1 border border-[#FEA453] text-[#FEA453] rounded mt-5 ml-5">
          {activeCrypto}
        </p>
      </div>
      <div>
        <p className="text-xs text-[#FEA453] p-2">
          *DAI coin withdrawal，please enter DAI wallet address
        </p>
      </div>
      <div className="flex flex-col m-1 ">
        <p className="text-white font-semibold">Wallet address</p>
        <input type="text" className="py-2 rounded bg-[#313840] ml-2 mt-2" />
      </div>
      <div className="flex flex-col m-1 ">
        <p className="text-white font-semibold">Wallet amount</p>
        <input type="text" className="py-2 rounded bg-[#313840] ml-2 mt-2" />
      </div>
      <div className="flex flex-col border-b-2 border-[#000000]">
        <p className="text-white font-semibold">Handling fee</p>
        <input
          type="text"
          className="py-2 rounded bg-[#000000] ml-2 mt-2 mb-2"
        />
      </div>
      <div>
        <p className="text-white font-semibold ml-3 mt-3">Important Notice</p>
      </div>
      <div className="text-[#dddddd] mb-20">
        <p className="text-xs mt-2">
          1. In order to prevent arbitrage behavior, the transaction volume can
          be applied for withdrawal after reaching the limit.
        </p>
        <p className="text-xs mt-2">
          2. The account will be received within 24 hours after submitting the
          withdrawal application. If the account is not received after the
          estimated time of withdrawal, please consult the online customer
          service.
        </p>
        <p className="text-xs mt-2">
          3. After submitting the withdrawal application, the funds are in a
          frozen state because the withdrawal is in progress and the funds are
          temporarily under the custody of the system, which does not mean that
          you have lost the asset or the asset is abnormal.
        </p>
      </div>
    </div>
  );
};

export default Withdrawal;
