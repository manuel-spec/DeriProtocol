import TuneIcon from "@mui/icons-material/Tune";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";

const Spot = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-[#0F1720]">
        <TuneIcon style={{ font: "25", color: "#ffffff" }} className="ml-4" />
        <CandlestickChartOutlinedIcon
          style={{ font: "25", color: "#ffffff" }}
        />
      </div>
    </div>
  );
};

export default Spot;
