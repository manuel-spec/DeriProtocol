import total_assets from "../../assets/imgs/assets/total_assets.png";
import exchange_assets from "../../assets/imgs/assets/exchange_assets.png";
import trade_assets from "../../assets/imgs/assets/trade_assets.png";
import perpetual_assets from "../../assets/imgs/assets/perpetual.png";
import finance_assets from "../../assets/imgs/assets/finance_assets.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Overview = () => {
  return (
    <div className="flex flex-col ml-3">
      <div
        className="flex flex-col w-full mt-3 rounded-lg h-40  mr-3"
        style={{
          backgroundImage: `url(${total_assets})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row m-4">
          <p className="text-[#eeeeee] text-sm mt-1 mr-2">Total assets</p>
          <div>
            <RemoveRedEyeIcon
              className="text-[#eeeeee] "
              style={{ fontSize: 18 }}
            />
          </div>
        </div>
        <div className="text-2xl font-semibold text-white ml-4">0.00</div>
        <div className="text-white text-xs ml-4"> ≈$ 0.00</div>
        <div className="text-white text-sm mt-5 ml-4 font-mediumbold">
          Daily Profit: 0.00
        </div>
      </div>
      <div
        className="flex flex-col w-full mt-3 rounded-lg h-40  mr-3"
        style={{
          backgroundImage: `url(${exchange_assets})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row m-4">
          <p className="text-[#eeeeee] text-sm mt-1 mr-2">Exchange assets</p>
        </div>
        <div className="text-2xl font-semibold text-white ml-4">0.00</div>
        <div className="text-white text-xs ml-4"> ≈$ 0.00</div>
        <div className="text-white text-sm mt-5 ml-4 font-mediumbold">
          Daily Profit: 0.00
        </div>
      </div>
      <div
        className="flex flex-col w-full mt-3 rounded-lg h-40  mr-3"
        style={{
          backgroundImage: `url(${trade_assets})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row m-4">
          <p className="text-[#eeeeee] text-sm mt-1 mr-2">Trade assets</p>
        </div>
        <div className="text-2xl font-semibold text-white ml-4">0.00</div>
        <div className="text-white text-xs ml-4"> ≈$ 0.00</div>
        <div className="text-white text-sm mt-5 ml-4 font-mediumbold">
          Daily Profit: 0.00
        </div>
      </div>
      <div
        className="flex flex-col w-full mt-3 rounded-lg h-40  mr-3"
        style={{
          backgroundImage: `url(${perpetual_assets})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row m-4">
          <p className="text-[#eeeeee] text-sm mt-1 mr-2">Perpetual assets</p>
        </div>
        <div className="text-2xl font-semibold text-white ml-4">0.00</div>
        <div className="text-white text-xs ml-4"> ≈$ 0.00</div>
        <div className="text-white text-sm mt-5 ml-4 font-mediumbold">
          Daily Profit: 0.00
        </div>
      </div>
      <div
        className="flex flex-col w-full mt-3 rounded-lg h-40  mr-3"
        style={{
          backgroundImage: `url(${finance_assets})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row m-4">
          <p className="text-[#eeeeee] text-sm mt-1 mr-2">Finance assets</p>
        </div>
        <div className="text-2xl font-semibold text-white ml-4">0.00</div>
        <div className="text-white text-xs ml-4"> ≈$ 0.00</div>
        <div className="text-white text-sm mt-5 ml-4 font-mediumbold">
          Daily Profit: 0.00
        </div>
      </div>
    </div>
  );
};

export default Overview;
