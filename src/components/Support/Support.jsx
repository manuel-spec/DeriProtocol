import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Support = () => {
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
          style={{ width: "100%", height: "430px" }} // Adjust the height as needed
        >
          {/* Chat messages will go here */}
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
          />
          <IconButton color="primary" aria-label="send">
            <SendIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Support;
