import person from "../../assets/imgs/assets/person.png";
import Header from "./Header";
import Announcment from "./Announcment";
import CoinGraph from "./CoinGraph";
import Options from "./Options";
import FastTrading from "./FastTrading";
import StickyHeadTable from "./Table";
import { Box, Drawer, Modal } from "@mui/material";
import { useState } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Basic from "./Identity/Basic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Home = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("jwt");

  const toggleDrawer = (open) => {
    setOpen(open);
  };
  const handleLogout = () => {
    cookies.remove("jwt", { path: "/" });
    navigate("/");
  };

  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      {token != null && (
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, backgroundColor: "#0F1720" }} className="h-full">
            <button onClick={() => setOpenModal(false)}>
              <div className="flex flex-row justify-between items-center text-center">
                <ArrowBackIcon className="text-white" />
                <p className="text-white font-bold ml-16">
                  Basic Identity Verification
                </p>
              </div>
            </button>
            <Basic />
          </Box>
        </Modal>
      )}
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <div className="h-full bg-[#0F1720] ">
          <div className="flex flex-col text-white">
            <div className=" ">
              <PersonPinIcon style={{ fontSize: "35", color: "#e8ce58" }} />

              <div className="p-2  ">
                <p className="text-center">email.test@mail.to</p>
              </div>
              <div
                className=" m-4 flex flex-row justify-between items-center bg-[#F0C163] py-4 px-5 text-sm"
                onClick={() =>
                  token != null ? setOpenModal(true) : navigate("/auth/signin/")
                }
              >
                <div className="flex flex-col">
                  <p className="font-semibold"> Basic Verification</p>
                  <p className="text-xs">not certified</p>
                </div>
                <div className="flex flex-col ml-20">
                  <img src={person} alt="" width={40} />
                </div>
              </div>
              <div
                className=" m-4 flex flex-row justify-between items-center bg-[#0FB591] py-4 px-5 text-sm"
                onClick={() =>
                  token != null ? setOpenModal(true) : navigate("/auth/signin/")
                }
              >
                <div className="flex flex-col">
                  <p className="font-semibold"> Advanced Verification</p>
                  <p className="text-xs">not certified</p>
                </div>
                <div className="flex flex-col ml-20">
                  <img src={person} alt="" width={40} />
                </div>
              </div>
              <div className=" border-b border-[#ddd] text-[#6D7177]">
                <button className="m-4">About us</button>
              </div>
              <div className=" border-b border-[#ddd] text-[#6D7177]">
                <button className="m-4" onClick={() => navigate("/help")}>
                  Help center
                </button>
              </div>
              {token && (
                <div className="border-b border-[#ddd] text-[#6D7177]">
                  <button className="m-4" onClick={() => handleLogout()}>
                    Logout
                  </button>
                </div>
              )}
              {token == null && (
                <div className="border-b border-[#ddd] text-[#6D7177]">
                  <button className="m-4">
                    <Link to="/auth/signin" className="">
                      Login
                    </Link>
                  </button>
                </div>
              )}
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
          <Link to="/support/">
            <SupportAgentIcon style={{ fontSize: "35", color: "#e8ce58" }} />
          </Link>
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
