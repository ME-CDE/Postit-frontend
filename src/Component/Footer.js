import React from "react";
import {BiRightArrowAlt} from "react-icons/bi"
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin} from "react-icons/ti"
const Footer = () => {
  const button = (e)=>{
    e.preventDefault()
  }
  return (
    <div className="w-screen bg-primaryBlack h-max" id="footer">
      <div className=" w-5/6 border-almostWhite h-max border-b pb-11 mx-auto text-white flex justify-between items-start pt-16 flex-wrap gap-y-10">
        <div className="max-w-[400px] mr-11">
          <h3 className=" mb-4 font-bold text-2xl leading-10">
            About Post<span className="text-primaryBlue">it</span>.
          </h3>
          <p className="text-base leading-7 text-almostWhite">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
        <div className="text-almostWhite flex items-start flex-col mr-11">
            <h3 className="font-bold text-2xl leading-10 mb-3">Quick Menu</h3>
            <p className="leading-8 text-[16px]">
              Home <br /> Stories <br /> Trending Stories <br /> Popular Stories
            </p>
        </div>
        <div className="flex items-center mr-11">
        <p className="leading-8 text-[16px]">
            Sign Up
            <br />
            Log In
            <br />
            Contact Us
        </p>
        </div>
        <div className="max-w-full ">
          <h3 className="font-bold sm:text-2xl text-[22px] sm:leading-10 mb-7">Subscribe to our newsletter</h3>
          <form className="bg-almostWhite w-[337px] max-w-full h-10 flex items-center pl-3 pr-2 rounded-sm ">
            <input type="email" className="bg-transparent w-[68.3%] h-full  flex-1 text-primaryBlack outline-none"  placeholder="Email address"/>
            <button className="h-7 bg-primaryBlue sm:w-[103px] w-[90px] flex justify-center items-center rounded-sm"  onClick={button}>Subscribe <BiRightArrowAlt className="text-almostWhite sm:inline-block ml-1 text-[20px] hidden"/></button>
          </form>
        </div>
      </div>
      <div className="w-10/12 flex justify-end mx-auto">
        <div className="text-almostWhite flex items-center h-max text-sm w-[260px] justify-between leading-7 mt-[22px] mb-11">
          <p className="font-semibold">Terms and Policy</p>
          <div  className="flex mb-[-2px] w-20 justify-between">
            <TiSocialTwitter/>
            <TiSocialFacebook/>
            <TiSocialLinkedin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
