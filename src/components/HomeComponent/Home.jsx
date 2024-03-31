import person from "../../assets/imgs/assets/person.png";
import Header from "./Header";
import Announcment from "./Announcment";
import CoinGraph from "./CoinGraph";
import Options from "./Options";
import FastTrading from "./FastTrading";
import StickyHeadTable from "./Table";
import { Drawer } from "@mui/material";
import { useState } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <div className="h-full bg-[#0F1720] ">
          <div className="flex flex-col text-white">
            <div className=" ">
              <PersonPinIcon style={{ fontSize: "35", color: "#e8ce58" }} />

              <div className="p-2  ">
                <p className="text-center">email.test@mail.to</p>
              </div>
              <div className=" m-4 flex flex-row justify-between items-center bg-[#F0C163] py-4 px-5 text-sm ">
                <div className="flex flex-col">
                  <p className="font-semibold"> Basic Verification</p>
                  <p className="text-xs">not certified</p>
                </div>
                <div className="flex flex-col ml-20">
                  <img src={person} alt="" width={40} />
                </div>
              </div>
              <div className=" m-4 flex flex-row justify-between items-center bg-[#0FB591] py-4 px-5 text-sm ">
                <div className="flex flex-col">
                  <p className="font-semibold"> Advanced Verification</p>
                  <p className="text-xs">not certified</p>
                </div>
                <div className="flex flex-col ml-20">
                  <img src={person} alt="" width={40} />
                </div>
              </div>
              <div className=" border-b border-[#ddd] text-[#6D7177]">
                <button className="m-4">Transaction History</button>
              </div>
              <div className=" border-b border-[#ddd] text-[#6D7177]">
                <button className="m-4">About us</button>
              </div>
              <div className=" border-b border-[#ddd] text-[#6D7177]">
                <button className="m-4">Help center</button>
              </div>
              <div className="border-b border-[#ddd] text-[#6D7177]">
                <button className="m-4">Security Center</button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      <div className="flex flex-row justify-between p-2 bg-slate-900">
        <div>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <PersonPinIcon style={{ fontSize: "35", color: "#e8ce58" }} />
          </button>
        </div>
        <div>
          <SupportAgentIcon style={{ fontSize: "35", color: "#e8ce58" }} />
        </div>
      </div>
      <Header />
      <Announcment />
      <CoinGraph />
      <Options />
      <FastTrading />
      <StickyHeadTable />
    </div>
  );
};
