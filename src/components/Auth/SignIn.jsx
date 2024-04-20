import { Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleForm = async (e) => {
    e.preventDefault();

    const loginResult = await Axios.post(
      "https://base.tradentra.io/api/auth/login/",

      {
        username: username,
        password: password,
      }
    ).catch((e) => {
      setErrors("error");
    });
    console.log(loginResult.status);

    if (loginResult.status == 200) {
      const cookies = new Cookies();
      cookies.set("jwt", loginResult.data["access"], { path: "/" });
      navigate("/");
    }
    console.log(errors);
  };

  return (
    <div className="">
      <div className="flex flex-col">
        {errors == "error" && (
          <Alert variant="filled" severity="error">
            Incorrect email or password !!
          </Alert>
        )}
        <div className="flex flex-row p-2">
          <h2 className="text-3xl text-white font-bold text-[#c9c9c9] mb-5">
            Login
          </h2>
        </div>
        <form className="flex flex-col" onSubmit={(event) => handleForm(event)}>
          <div className="flex flex-row">
            <p className="mb-5 text-white border-b-2 border-[#F0C163] text-[#BAB8B8] text-xl font-bold p-2 ml-2">
              Email
            </p>
          </div>

          <div className="flex flex-col p-2">
            <input
              type="text"
              className="bg-[#1e2229] py-2 text-white mt-3 border-b border-[#000000]"
              placeholder="Please enter your email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="bg-[#1e2229] py-2 text-white mt-3 border-b border-[#000000]"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Login"
              className="text-white mt-10 bg-[#F0C163] p-2 rounded-2xl active:bg-[#F0C163] active:text-black"
            />
          </div>
        </form>
        <div className="flex flex-row justify-start p-2">
          <Link to="/auth/register">
            <p className="text-white text-[#c9c9c9]">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
