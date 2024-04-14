import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link } from "react-router-dom";
import favico from "../../assets/favico.png";
import star from "../../assets/star.png";

const HelpCenter = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between text-white">
        <div>
          <Link to="/">
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
      <div className="flex flex-col p-3">
        <div>
          <p className="text-white text-lg font-semibold">help center</p>
        </div>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p className="ml-3">What is transaction volume? </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p className="ml-3">Why do we need to transfer funds? </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <div>
          <img src={star} alt="" width={20} />
        </div>
        <p className="ml-3">What are futures? </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <div>
          <img src={star} alt="" width={25} />
        </div>
        <p className="ml-3">
          Why does the amount of assets after conversion change?
        </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p className="ml-3">Why do we need real-name authentication? </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p className="ml-3">What are the rules of futures trading? </p>
      </div>
    </div>
  );
};

export default HelpCenter;
