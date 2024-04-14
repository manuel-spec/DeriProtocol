import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link } from "react-router-dom";
import favico from "../../assets/favico.png";
import star from "../../assets/star.png";
import { useNavigate } from "react-router-dom";

const HelpCenter = () => {
  const navigate = useNavigate();
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
        <p
          className="ml-3"
          onClick={() =>
            navigate("/help/more", {
              state: {
                title: "What is transaction volume?",
                body: "According to the relevant provisions of the anti-money laundering law, each exchange needs to price control, and needs to complete a certain amount of transactions before withdrawing coins to avoid users using the exchange to launder money! For example, if you charge 10000U, the transaction amount must reach the relevant regulations!",
              },
            })
          }
        >
          What is transaction volume?{" "}
        </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p
          className="ml-3"
          onClick={() =>
            navigate("/help/more", {
              state: {
                title: "Why do we need to transfer funds?",
                body: "In order to protect the independence of your funds between the various accounts and to facilitate reasonable risk control, the accounts of the major trading modules are hereby divided. A transfer is the process of converting assets between trading accounts.",
              },
            })
          }
        >
          Why do we need to transfer funds?{" "}
        </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <div>
          <img src={star} alt="" width={20} />
        </div>
        <p
          className="ml-3"
          onClick={() =>
            navigate("/help/more", {
              state: {
                title: "What are futures?",
                body: "In order to protect the independence of your funds between the various accounts and to facilitate reasonable risk control, the accounts of the major trading modules are hereby divided. A transfer is the process of converting assets between trading accounts.",
              },
            })
          }
        >
          What are futures?
        </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <div>
          <img src={star} alt="" width={25} />
        </div>
        <p
          className="ml-3"
          onClick={() =>
            navigate("/help/more", {
              state: {
                title:
                  " Why does the amount of assets after conversion change?",
                body: "The conversion in assets is calculated as the current value of digital currency holdings converted to U.S. dollars, and changes as the price of digital assets fluctuates; the amount of your digital assets does not change.",
              },
            })
          }
        >
          Why does the amount of assets after conversion change?
        </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p
          className="ml-3"
          onClick={() =>
            navigate("/help/more", {
              state: {
                title: "Why do we need real-name authentication?",
                body: "For the safety of your funds, we restrict the association of your receiving account with your current account real name information.",
              },
            })
          }
        >
          Why do we need real-name authentication?
        </p>
      </div>
      <div className="p-3 flex flex-row text-white">
        <img src={star} alt="" width={20} />
        <p
          className="ml-3"
          onClick={() =>
            navigate("/help/more", {
              state: {
                title: "What are the rules of futures trading?",
                body: "Participate in trading by predicting the next price movement (up or down) of the current trading pair. The settlement does not calculate the magnitude of the increase or decrease, but only the result of the gain or loss. The percentage of profit for settlement varies for different delivery times, and the profit will be accurately displayed in the trading interface.",
              },
            })
          }
        >
          What are the rules of futures trading?
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
