import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { MdErrorOutline } from "react-icons/md";

const Login = () => {
  const link = useNavigate();
  const initialError = { email: "", password: "" };
  const [error, setError] = useState(initialError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://postiitt.herokuapp.com/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    if (data.redirect) {
      setError(initialError);
        link(data.redirect);
    }
    if (data.errors) {
      setError(data.errors);
    }
  };
  const style = error.email? { borderBottom: "1px solid red" }: { borderBottom: "" };
  const style2 = error.password? { borderBottom: "1px solid red" } : { borderBottom: "" };
  return (
    <div className="SignIn bg-greyishWhite/[0.94] w-screen h-screen flex justify-center items-center fixed top-0 left-0 overflow-y-hidden">
      <div
        className="text-primaryBlack w-[653px] h-[773px] max-w-full max-h-full bg-almostWhite shadow rounded-[3px] flex flex-col justify-center items-center relative"
        id="content"
      >
        <CgClose
          className="absolute top-[34px] right-[32px] text-2xl"
          onClick={() => link("/")}
        />
        <h3 className=" text-4xl w-max font-bold leading-[60px] mb-3">
          Welcome Back
        </h3>
        <form className="flex flex-col sm:w-8/12 w-4/5 h-[305px] mb-10 justify-start">
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-full py-[34px] border-primaryBlack border-b text-center outline-none placeholder-primaryBlack bg-transparent"
            style={style}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <small className="text-red-500 text-right relative mb-[-20px] mt-1 text-sm bottom-7 mr-1">
              <MdErrorOutline className="inline" /> {error.email}
            </small>
          )}
          <input
            type="password"
            id="password"
            placeholder="password"
            className="w-full py-[34px] border-primaryBlack border-b text-center outline-none placeholder-primaryBlack bg-transparent"
            style={style2}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <small className="text-red-500 text-right relative mb-[-20px] mt-1 text-sm bottom-7 mr-1">
              <MdErrorOutline className="inline" /> {error.password}
            </small>
          )}
          <button
            type="submit"
            className="w-full h-[47px] bg-primaryBlue rounded-[7px] mt-[69px] text-white font-bold text-[20px]"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </form>
        <p className="font-bold text-[18px] leading-9 text-center w-10/12">
          No Account?{" "}
          <span className="text-[#0086B0] cursor-pointer" onClick={() => link("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
