import React from "react";
import { useLocation, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import favico from "../../assets/favico.png";

const More = () => {
  const location = useLocation();
  return (
    <div>
      <div className="flex flex-row justify-between text-white">
        <div>
          <Link to="/help">
            <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-bold">help center</p>
        </div>
        <div> </div>
      </div>
      <div className="flex flex-row p-3">
        <img src={favico} alt="" width={50} />
      </div>
      <div className="text-white text-xl font-semibold p-5">
        {location.state.title}
      </div>
      <div className="text-white mt-5 p-5">{location.state.body}</div>
    </div>
  );
};

export default More;
