import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();

    const loginResult = await Axios.post(
      "http://localhost:8000/api/auth/login/",

      {
        username: username,
        password: password,
      }
    );
    if (loginResult.status == 200) {
      const cookies = new Cookies();
      cookies.set("jwt", loginResult.data["access"], { path: "/" });
      navigate("/");
    }
  };
  return (
    <div className=" mt-40 bg-[#0F1720]">
      <div className="flex flex-col">
        <div className="mt-10">
          <h2 className="text-center text-2xl text-white font-semibold">
            SignIn
          </h2>
        </div>
        <form
          className="flex flex-col p-10"
          onSubmit={(event) => handleForm(event)}
        >
          <input
            type="text"
            className="bg-[#222C38] rounded px-20 py-2 text-white text-center mt-3"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="bg-[#222C38] rounded px-20 py-2 text-white text-center mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Sign in"
            className="text-white mt-10 bg-[#222c38] p-2 rounded-lg active:bg-[#F0C163] active:text-black"
          />
        </form>
        <div className="flex flex-row justify-end mr-10">
          <Link to="/auth/register">
            <p className="text-white">register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
