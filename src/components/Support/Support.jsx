import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const Support = () => {
  const [textToSend, setTextToSend] = useState("");
  const [texts, setTexts] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("jwt");
    const user = jwtDecode(token);
    setUserInfo(user);

    const getMessages = () => {
      Axios.post("http://localhost:8000/api/support/list/", {
        user_id: user["user_id"],
      }).then((res) => {
        setTexts(res.data);
        console.log(res.data);
      });
    };

    getMessages(); // Fetch messages initially

    const intervalId = setInterval(() => {
      getMessages(); // Fetch messages every second
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = () => {
    Axios.post("http://localhost:8000/api/support/send/", {
      message: textToSend,
      from_user: userInfo["user_id"],
      to_user: 3,
    }).then((res) => setTextToSend(""));
  };
  return (
    <div>
      <div className="flex flex-row justify-between text-white bg-gray-800 p-4">
        <div>
          <Link to="/">
            <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-bold">Online Customer Support</p>
        </div>
        <div> </div>
      </div>
      {/* Customer support chat body */}
      <div className="p-4">
        <div
          className="mb-4 bg-[#1F2937] rounded-lg"
          style={{ width: "100%", height: "430px", overflowY: "auto" }}
        >
          <div className="flex flex-col">
            {texts &&
              texts
                .slice()
                .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
                .map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      item.from_user == userInfo["user_id"]
                        ? "justify-end"
                        : "justify-start"
                    } mt-1 mb-1`}
                  >
                    <p
                      className={`text-white rounded-lg px-3 py-1 ${
                        item.from_user == userInfo["user_id"]
                          ? "bg-[#0085E8]"
                          : "bg-[#313840]"
                      }`}
                    >
                      {item.message}
                    </p>
                  </div>
                ))}
          </div>
        </div>

        {/* Inputs to send the chat */}
        <Box className="flex flex-row">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type your message..."
            className="text-white"
            InputProps={{
              style: { color: "white" }, // Override default input color
            }}
            value={textToSend}
            onChange={(e) => setTextToSend(e.target.value)}
          />
          <IconButton
            color="primary"
            aria-label="send"
            onClick={() => sendMessage()}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Support;
