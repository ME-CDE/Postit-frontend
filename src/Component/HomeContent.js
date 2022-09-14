import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import tech from "../images/tech.png";
import lifestyle from "../images/lifestyle.png";
import nature from "../images/nature.png";
const HomeContent = () => {
  const link = useNavigate();
  const mobileRoute = (text) => {
    setSide(false);
    link(text);
  };
  const button = (e)=>{
    e.preventDefault()
  }
  const [side, setSide] = useState(false);
  return (
    <div className="w-screen homecontent">
      <nav className="w-full bg-almostWhite">
        <div className="w-10/12 mx-auto h-[92px] flex items-center justify-between text-primaryBlack">
          <h3 className=" text-4xl w-max font-bold cursor-pointer" onClick={() => link("/")}>
            Post<span className="text-primaryBlue">it</span>.
          </h3>
          <ul className="items-center text-[24px] gap-x-[30px] md:flex hidden font-normal">
            <li>
              <a href="#stories">Stories</a>
            </li>

            <li>
              <a href="#footer">Contact</a>
            </li>
            <li onClick={() => link("/signin")} className="cursor-pointer">Signin</li>
            <li
              className="bg-primaryBlue text-almostWhite w-[132px] h-[33px] rounded-lg text-center cursor-pointer"
              onClick={() => link("/signup")}
            >
              Get Started
            </li>
          </ul>
          <MdMenu
            className="text-[34px] md:hidden"
            onClick={() => setSide(!side)}
          />
          {side && (
            <ul className=" fixed top-0 right-0 bg-almostWhite w-full xxs:w-9/12 h-screen  text-[24px] flex flex-col gap-y-[30px] pl-10 pt-28 z-10 md:hidden shadow-xl">
              <CgClose
                className="absolute top-[34px] right-[32px] text-3xl"
                onClick={() => setSide(false)}
              />
              <li>Stories</li>
              <li>Contact</li>
              <li onClick={() => mobileRoute("/signin")} className='cursor-pointer'>Signin</li>
              <li onClick={() => mobileRoute("/signup")} className='cursor-pointer'>Get Started</li>
            </ul>
          )}
        </div>
      </nav>
      <div className="w-full h-[616px] bg-hero bg-cover bg-top bg-no-repeat relative">
        <div className="w-10/12 left-[8.375%] h-max absolute top-0">
          <div className="w-[calc(100%+10%)] text-[#000000] top-[132px] absolute">
            <h1 className="font-bold mb-[12px] leading-none text-[48px] smallest:text-[53px] xxxs:text-[65px] xxs:text-[70px] xs:text-[80px] md:text-[95px] lg:text-[110px]">
              Stay Curious.
            </h1>
            <p className="w-[95%] max-w-[430px] text-[20px] leading-[35px] text-left tracking-[.02em]">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.
            </p>
            <p
              className="w-[132px] h-[33px] text-[24px] bg-primaryBlue text-almostWhite  rounded-lg text-center mt-[28px] cursor-pointer"
              onClick={() => link("/signup")}
            >
              Get Started
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen pt-[70px] xs:pb-[70px]" id="stories">
        <div className=" w-full xxs:w-10/12 mx-auto xxs:border xxs:border-[#BBBBBB] xxs:overflow-x-scroll xl:overflow-hidden">
          <div className=" xxs:min-w-[1040px] w-full xxs:h-[145px] flex items-center pl-4 xxs:pl-0 xxs:justify-center gap-[32px] xxs:gap-[28px] flex-col xxs:flex-row ">
            <div className="w-max  flex gap-x-4 h-max">
              <img src={lifestyle} alt="" className="w-[100px] xxs:w-[146px]" />
              <div className="flex flex-col justify-between">
                <p className="w-max px-3 py-[1px] bg-lifestyle text-[14px] rounded-[5px] text-almostWhite tracking-[.02em] text-center">
                  Lifestyle
                </p>
                <p className=" text-[16px] leading-7">
                  The 20 Biggest Fashion <br /> Companies In Nigeria <span className="xxxs:inline-block hidden">2022</span>
                </p>
              </div>
            </div>
            <div className="w-max h-max flex gap-x-4">
              <img src={nature} alt="" className="w-[100px] xxs:w-[146px]" />
              <div className="flex flex-col justify-between">
                <p className="w-max px-3 py-[1px] bg-nature text-[14px] rounded-[5px] text-almostWhite tracking-[.02em] text-center">
                  Nature
                </p>
                <p className=" text-[16px] leading-7">
                  The 20 Biggest Agro <br /> Companies In Nigeria <span className="xxxs:inline-block hidden">2022</span>
                </p>
              </div>
            </div>
            <div className="w-max h-max flex gap-x-4">
              <img src={tech} alt="" className="w-[100px] xxs:w-[146px]" />
              <div className="flex flex-col justify-between">
                <p className="w-max px-3 py-[1px] bg-tech text-[14px] rounded-[5px] text-almostWhite tracking-[.02em] text-center">
                  Tech
                </p>
                <p className=" text-[16px] leading-7">
                  The 20 Biggest Fintech <br /> Companies In Nigeria <span className="xxxs:inline-block hidden">2022</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full xs:w-10/12 h-[250px] mx-auto bg-bg2 bg-cover  flex justify-center items-center mt-[70px]">
          <div className="max-w-[90%] w-max flex flex-col justify-center items-center text-[20px] leading-none">
            <h3 className=" max-w-full w-max font-bold tracking-[.02em] mb-[22px]">
              Try Post<span className="text-primaryBlue">it</span>.
            </h3>
            <p className="max-w-full w-max mb-[43px] tracking-[.02em] text-center">
              Do you want to write or discover stories from writers on any
              topic?
            </p>
            <form className=" h-[39px] max-w-full w-[496px] flex ">
              <input type="email" className="w-full pl-[18px] h-full rounded-l-lg outline-none shrink"placeholder="Enter Email address"/>
              <button className=" w-[130px] xs:w-[156px] h-full bg-primaryBlue text-[#FFFBFB] text-[24px] rounded-r-lg outline-none xs:flex-none shrink" onClick={button}>
                <span className="xs:inline-block hidden">Get Started</span><span  className="xs:hidden">Start</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
