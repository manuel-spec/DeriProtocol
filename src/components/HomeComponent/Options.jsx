import depositIcons from "../../assets/icons/deposit.png";
import sendIcons from "../../assets/icons/send.png";
import spotIcon from "../../assets/icons/spot.png";
import transferIcon from "../../assets/icons/transfer.png";
import tradingIcon from "../../assets/icons/trading.png";
import helpIcon from "../../assets/icons/helpcenter.png";
import miningIcon from "../../assets/icons/mining.png";
import perpetualIcon from "../../assets/icons/perpetual.png";
import { Link, useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0F1720] mt-2 flex flex-col ">
      <div className="flex flex-row ml-10">
        <div className="p-35 text-white text-xs text-center flex flex-col mr-10 justify-center items-center ml-2">
          <div>
            <Link to="/recharge">
              <img src={depositIcons} alt="" width={25} />
            </Link>
          </div>
          <div>
            <Link to="/recharge">Deposit</Link>
          </div>
        </div>
        <div className="p-3 text-white text-xs text-center flex flex-col mr-10 justify-center items-center ml-4">
          <div>
            <Link to="/withdrawal">
              <img src={sendIcons} alt="" width={25} />
            </Link>
          </div>
          <div>
            <Link to="/withdrawal">Withdrawal</Link>
          </div>
        </div>
        <div
          className="p-3 text-white text-xs text-center flex flex-col mr-10 justify-center items-center ml-4"
          onClick={() => navigate("spot/")}
        >
          <div>
            <img src={spotIcon} alt="" width={25} />
          </div>
          <div>
            <p>Spot</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-5">
        <div
          className="p-3 text-white text-xs text-center flex flex-col mr-10 justify-center items-center ml-4"
          onClick={() => navigate("trade/")}
        >
          <div>
            <img src={tradingIcon} alt="" width={25} />
          </div>
          <div>
            <p>Trading</p>
          </div>
        </div>
        <div
          className="p-3 text-white text-xs text-center flex flex-col mr-10 justify-center items-center"
          onClick={() => navigate("/help/")}
        >
          <div>
            <img src={helpIcon} alt="" width={25} />
          </div>
          <div>
            <p>Help Center</p>
          </div>
        </div>

        <div
          className="p-3 text-white text-xs text-center flex flex-col mr-3 justify-center items-center"
          onClick={() => navigate("perpetual/")}
        >
          <div>
            <img src={perpetualIcon} alt="" width={25} />
          </div>
          <div>
            <p>Perpetual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
