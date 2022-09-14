import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { MdErrorOutline } from "react-icons/md";
const SignUp = () => {
  const initialError = { password: "", email: "", username: "" };
  const [error, setError] = useState(initialError);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const link = useNavigate();
  const style2 = error[`email`]? { borderBottom: "1px solid red" }: { borderBottom: "" };
  const style1 = error[`username`]? { borderBottom: "1px solid red" }: { borderBottom: "" };
  const style3 = error[`password`]? { borderBottom: "1px solid red" }: { borderBottom: "" };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:7500/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.redirect) {
      setError(initialError);
      setTimeout(() => {
        window.location.assign(data.redirect);
      }, 300);
    }
    if (data.errors) {
      setError(data.errors);
    }
  };

  return (
    <div className="SignUp bg-greyishWhite/[0.94] w-screen h-screen flex justify-center items-center fixed top-0 left-0 overflow-y-scroll">
      <div
        className="text-primaryBlack w-[653px] h-[773px] max-w-full max-h-full bg-almostWhite shadow rounded-[3px] flex flex-col justify-center items-center relative"
        id="content"
      >
        <CgClose
          className="absolute top-[3%] smallest:top-[5%] right-[5.7%] text-2xl"
          onClick={() => link("/")}
        />
        <h3 className=" text-4xl w-max font-bold leading-[60px] mb-3">
          Join Post<span className="text-primaryBlue">it</span>.
        </h3>
        <p className="text-xl w-[95%] xxs:w-10/12 px-2 mx-auto text-center">
          Enter your email address to create an account on Post
          <span className="text-primaryBlue">it</span>.
        </p>
        <form className="flex flex-col sm:w-8/12 w-4/5">
          <input
            type="text"
            name="username"
            id="name"
            placeholder="Username"
            className="w-full py-[25px] xs:py-[34px] border-primaryBlack border-b text-center outline-none placeholder-primaryBlack bg-transparent"
            style={style1}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error.username && (
            <small className="text-red-500 text-right relative mb-[-20px] mt-1 text-sm bottom-7 mr-1">
              <MdErrorOutline className="inline" /> {error.username}
            </small>
          )}
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-full py-[25px] xs:py-[34px] border-primaryBlack border-b text-center outline-none placeholder-primaryBlack bg-transparent"
            style={style2}
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
            className="w-full py-[25px] xs:py-[34px] border-primaryBlack border-b text-center outline-none placeholder-primaryBlack bg-transparent"
            style={style3}
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
            className="w-full h-[47px] bg-primaryBlue rounded-[5px] mt-[38px] text-white font-bold"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </form>
        <p className="font-bold text-[18px] leading-9 mt-7 text-center w-9/12">
          Already have an account?{" "}
          <span className="text-primaryBlue cursor-pointer" onClick={() => link("/signin")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
