import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Basic = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-white font-bold text-center text-lg">
        Select the country of issue of your document
      </p>
      <form
        action=""
        onSubmit={(event) => handleForm(event)}
        className="flex flex-col"
      >
        <input
          type="text"
          className="bg-[#222C38] rounded px-20 py-3 text-white text-center mt-3"
          placeholder="Country"
        />
        <input
          type="text"
          className="bg-[#222C38] rounded px-20 py-3 text-white text-center mt-3"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="bg-[#222C38] rounded px-20 py-3 text-white text-center mt-3"
          placeholder="ID Number"
        />
        <input
          type="text"
          className="bg-[#222C38] rounded px-20 py-3 text-white text-center mt-3"
          placeholder="City"
        />
        <input
          type="text"
          className="bg-[#222C38] rounded px-20 py-3 text-white text-center mt-3"
          placeholder="please enter your email address"
        />
        <input
          type="submit"
          value="Submit"
          className="text-white mt-3 bg-[#F0C163] rounded-lg p-3"
        />
      </form>
    </div>
  );
};

export default Basic;
