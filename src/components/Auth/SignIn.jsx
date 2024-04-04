const SignIn = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center mt-40 bg-[#0F1720]">
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
          />
          <input
            type="password"
            className="bg-[#222C38] rounded px-20 py-2 text-white text-center mt-3"
            placeholder="Password"
          />
          <input
            type="submit"
            value="Sign in"
            className="text-white mt-10 bg-[#222c38] p-2 rounded-lg active:bg-[#F0C163] active:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
