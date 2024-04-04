import { Link } from "react-router-dom";
const SignUP = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" mt-40 bg-[#0F1720]">
      <div className="flex flex-col">
        <div className="mt-10">
          <h2 className="text-center text-2xl text-white font-semibold">
            Register
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
          />
          <input
            type="password"
            className="bg-[#222C38] rounded px-20 py-2 text-white text-center mt-3"
            placeholder="Password"
          />
          <input
            type="submit"
            value="Register"
            className="text-white mt-10 bg-[#222c38] p-2 rounded-lg active:bg-[#F0C163] active:text-black"
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
