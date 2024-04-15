import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom/dist";
import Axios from "axios";

const Update = () => {
  const location = useLocation();
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("jwt");
    const userData = jwtDecode(token);
    console.log(userData);
    if (userData["user_id"] != 4) {
      cookies.remove("jwt");
    }
  }, []);

  console.log(location.state.item);

  const [BTC_Balance, setBTC_Balance] = useState(
    location.state.item.BTC_Balance
  );
  const [USDT_Balance, setUSDT_Balance] = useState(
    location.state.item.USDT_Balance
  );
  const [ETH_Balance, setETH_Balance] = useState(
    location.state.item.ETH_Balance
  );
  const [DOT_Balance, setDOT_Balance] = useState(
    location.state.item.DOT_Balance
  );
  const [XRP_Balance, setXRP_Balance] = useState(
    location.state.item.XRP_Balance
  );
  const [LINK_Balance, setLINK_Balance] = useState(
    location.state.item.LINK_Balance
  );
  const [BCH_Balance, setBCH_Balance] = useState(
    location.state.item.BCH_Balance
  );
  const [LTC_Balance, setLTC_Balance] = useState(
    location.state.item.LTC_Balance
  );
  const [ADA_Balance, setADA_Balance] = useState(
    location.state.item.ADA_Balance
  );

  const [EOS_Balance, setEOS_Balance] = useState(
    location.state.item.EOS_Balance
  );
  const [TRX_Balance, setTRX_Balance] = useState(
    location.state.item.TRX_Balance
  );
  const [XMR_Balance, setXMR_Balance] = useState(
    location.state.item.XMR_Balance
  );
  const [DASH_Balance, setDASH_Balance] = useState(
    location.state.item.DASH_Balance
  );

  const [FIL_Balance, setFIL_Balance] = useState(
    location.state.item.FIL_Balance
  );
  const [YFI_Balance, setYFI_Balance] = useState(
    location.state.item.YFI_Balance
  );
  const [ZEC_Balance, setZEC_Balance] = useState(
    location.state.item.ZEC_Balance
  );
  const [DOGE_Balance, setDOGE_Balance] = useState(
    location.state.item.DOGE_Balance
  );
  const BalanceUpdate = (token, newBalance) => {
    console.log(location.state.item.id);
    console.log(token);
    Axios.put("http://localhost:8000/api/balance/update/", {
      pk: location.state.item.id,
      token: token,
      balance: newBalance,
    });
  };

  return (
    <div>
      <div className="flex flex-row justify-center text-xl font-bold  text-white border rounded-lg p-3 ">
        Update User Balance
      </div>
      <div className="flex flex-col p-5 mb-10 justify-center items-center">
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">BTC</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={BTC_Balance}
            onChange={(e) => setBTC_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("BTC", BTC_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">USDT</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={USDT_Balance}
            onChange={(e) => setUSDT_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("USDT", USDT_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">ETH</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={ETH_Balance}
            onChange={(e) => setETH_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("ETH", ETH_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">ADA</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={ADA_Balance}
            onChange={(e) => setADA_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("ADA", ADA_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">BCH</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={BCH_Balance}
            onChange={(e) => setBCH_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("BCH", BCH_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">DASH</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={DASH_Balance}
            onChange={(e) => setDASH_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("DASH", DASH_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">DOT</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={DOT_Balance}
            onChange={(e) => setDOT_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("DOT", DOT_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">XRP</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={XRP_Balance}
            onChange={(e) => setXRP_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("XRP", XRP_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">LINK</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={LINK_Balance}
            onChange={(e) => setLINK_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("LINK", LINK_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">LTC</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={LTC_Balance}
            onChange={(e) => setLTC_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("LTC", LTC_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">EOS</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={EOS_Balance}
            onChange={(e) => setEOS_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("EOS", EOS_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">TRX</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={TRX_Balance}
            onChange={(e) => setTRX_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("TRX", TRX_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">XMR</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={XMR_Balance}
            onChange={(e) => setXMR_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("XMR", XMR_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">FIL</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={FIL_Balance}
            onChange={(e) => setFIL_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("FIL", FIL_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">YFI</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={YFI_Balance}
            onChange={(e) => setYFI_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("YFI", YFI_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">ZEC</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={ZEC_Balance}
            onChange={(e) => setZEC_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("ZEC", ZEC_Balance)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-row ">
          <p className="text-white mt-2 mr-2">DOGE</p>
          <input
            type="number"
            className="mb-3 bg-[#313840] rounded mt-2 mr-3 text-white"
            value={DOGE_Balance}
            onChange={(e) => setDOGE_Balance(e.target.value)}
          />
          <button
            className="text-center px-3 text-white border rounded"
            onClick={() => BalanceUpdate("DOGE", DOGE_Balance)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
