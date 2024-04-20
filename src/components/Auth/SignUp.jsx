import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Alert from "@mui/material/Alert";

const SignUP = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState(false);
  const [otpSent, setOtpSend] = useState(false);
  const [invalidOtp, setInvalidOtp] = useState(false);

  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();

    const loginResult = Axios.post(
      "https://base.tradentra.io/api/auth/register/",
      {
        username: username,
        email: username,
        password: password,
        otp: otp,
      }
    )
      .then((res) => console.log(res))
      .catch((e) => setInvalidOtp(true));

    if (loginResult.status == 201) {
      navigate("/auth/signin/");
    } else if (loginResult.status == 206) {
      setInvalidOtp(true);
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
    Axios.post("https://base.tradentra.io/api/auth/register/email/", {
      email: username,
    });
    setOtpSend(true);
  };
  return (
    <div className="">
      <div className="flex flex-col">
        {errors && (
          <Alert variant="filled" severity="error">
            Please enter a valid email address !
          </Alert>
        )}
        {otpSent && (
          <Alert severity="success">
            Verification OTP Successfully Sent , Please Check your address !
          </Alert>
        )}
        {invalidOtp && (
          <Alert variant="filled" severity="error">
            Please enter a valid otp code !
          </Alert>
        )}
        <div className="flex flex-row mt-5 ">
          <h2 className="text-3xl text-white font-semibold p-2 text-[#BAB8B8]">
            Register
          </h2>
        </div>

        <form
          className="flex flex-col "
          onSubmit={(event) => handleForm(event)}
        >
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
            type="submit"
            value="Register"
            className="text-white mt-10 m-5  bg-[#F0C163] p-2 rounded-lg active:bg-[#F0C163] active:text-black"
          />
        </form>
        <div className="flex flex-row justify-end mr-10">
          <p className="text-white mr-4"> already have an account ?</p>
          <Link to="/auth/signin">
            <p className="text-white">login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
