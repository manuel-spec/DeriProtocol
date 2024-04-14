import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const SignUP = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();

    const loginResult = await Axios.post(
      "http://localhost:8000/api/auth/register/",
      {
        username: username,
        email: username,
        password: password,
      }
    );
    if (loginResult.status == 201) {
      navigate("/auth/signin/");
    }
  };
  return (
    <div className="">
      <div className="flex flex-col">
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
