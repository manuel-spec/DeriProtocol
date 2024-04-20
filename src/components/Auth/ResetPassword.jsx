import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Alert } from "@mui/material";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [otp, setOtp] = useState("");
  const [invalidOtp, setInvalidOtp] = useState(false);
  const [errors, setErrors] = useState(false);
  const [otpSent, setOtpSend] = useState(false);
  const [matchError, setMatchError] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();

    if (password === passwordRepeat) {
      const loginResult = Axios.post(
        "http://base.tradentra.io/api/auth/reset/password/",
        {
          email: username,
          password: password,
          otp: otp,
        }
      )
        .then((res) => navigate("/auth/signin/"))
        .catch((e) => {
          console.log(e["response"]["status"]);
          if (e["response"]["status"] == 406) {
            setInvalidOtp(true);
          } else if (e["response"]["status"] == 409) {
            setErrors(true);
          }
        });

      if (loginResult.status == 201) {
        navigate("/auth/signin/");
      } else if (loginResult.status == 206) {
        setInvalidOtp(true);
      }
    } else {
      setMatchError("error");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  };
  const getVerificationCode = async () => {
    if (!validateEmail()) {
      setErrors(true);
    }
    Axios.post("https://base.tradentra.io/api/auth/reset/email/", {
      email: username,
    });
    setOtpSend(true);
  };

  return (
    <div className="flex flex-col">
      {matchError.length > 0 && (
        <Alert variant="filled" severity="error">
          Passwords Don't Match !
        </Alert>
      )}
      {invalidOtp > 0 && (
        <Alert variant="filled" severity="error">
          Invalid OTP provided !
        </Alert>
      )}
      {errors && (
        <Alert variant="filled" severity="error">
          User with this email doesn't exist !
        </Alert>
      )}
      <div className="flex flex-row justify-between text-white">
        <div className="mt-3">
          <Link to="/auth/login">
            <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center p-2">
          <p className="text-lg font-bold">Reset Password </p>
        </div>
        <div> </div>
      </div>
      <div></div>
      <form className="flex flex-col " onSubmit={(event) => handleForm(event)}>
        <div className="flex flex-row">
          <p className="mb-5 text-white border-b-2 border-[#F0C163] text-[#BAB8B8] text-xl font-bold p-2">
            Email
          </p>
        </div>
        <input
          type="text"
          className="bg-[#1e2229] py-2 text-white mt-3 border-b border-[#000000]"
          placeholder="Please enter your email address"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="flex flex-row justify-between">
          <input
            type="text"
            className="bg-[#1e2229] py-2 text-white mt-3 border-b border-[#000000] w-full"
            placeholder="Please enter verification code"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="button"
            className="mt-2 bg-black text-white px-3 py-1 rounded-2xl text-xs"
            onClick={() => getVerificationCode()}
          >
            Obtain
          </button>
        </div>
        <input
          type="password"
          className="bg-[#1e2229] py-2 text-white mt-3 border-b border-[#000000]"
          placeholder="Please enter your password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="bg-[#1e2229] py-2 text-white mt-3 border-b border-[#000000]"
          placeholder="Please enter your password again"
          value={passwordRepeat}
          required
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <input
          type="submit"
          value="Reset"
          className="text-white mt-10 m-5  bg-[#F0C163] p-2 rounded-lg active:bg-[#F0C163] active:text-black"
        />
      </form>
    </div>
  );
};

export default ResetPassword;
