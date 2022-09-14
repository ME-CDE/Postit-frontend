import React from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import wordBoard from "../images/wordBoard.png";
import Nav from "./NavBar"
import Footer from "./Footer";

const Welcome = () => {
  const {id} = useParams()
  const [name] = useOutletContext();
  const link = useNavigate()

  return (
    <div>
    <Nav data={name}/>
    <div className="Welcome w-screen h-[514px] bg-[#F5F6F8] flex  items-center">
      <div className="w-10/12 h-max mx-auto flex justify-between ">
        <div className="max-w-[100%] h-max mr-10">
          <h1 className="font-bold text-[36px] smallest:text-[40px] xxxs:text-[45px] xxs:text-[53px] xs:text-[60px] sm:text-[75px] leading-none resize mb-6">
            Welcome {name.username},
          </h1>
          <p className="font-normal resize w-[408px] max-w-[100%] text-[20px] leading-9 tracking-[0.02em] text-black mb-10">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <div className="flex gap-5 font-bold tracking-[0.02em] text-2xl sm:text-[30px] leading-[51px]">
            <button className="w-[175px] sm:w-[230px] h-[48px] xxs:h-[52px] resize text-[#F0F8FF] bg-primaryBlue rounded-md" onClick={()=> link(`/app/${id}/post`)}>
              My Stories
            </button>
            <button className="w-[175px] sm:w-[230px] h-[48px] xxs:h-[52px] resize text-primaryBlue bg-transparent  rounded-md border border-primaryBlue" onClick={()=> link(`/app/${id}/feed`)}>
              Go to feed
            </button>
          </div>
        </div>
        <img
          src={wordBoard}
          alt=""
          className="hidden cxl:inline-block w-[55%]"
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Welcome;
