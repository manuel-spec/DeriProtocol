import fast from "../../assets/imgs/fast.png";
import { useNavigate } from "react-router-dom";

const FastTrading = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full mt-2">
      <img src={fast} alt="" onClick={() => navigate("trade/")} />
    </div>
  );
};

export default FastTrading;
