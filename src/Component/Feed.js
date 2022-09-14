import React from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import wordBoard from "../images/wordBoard.png";
import useAuth from "./useAuth";
import Nav from "./NavBar";
import Footer from "./Footer";
import FeedContent from "./FeedContent";
const Feed = () => {
  const { id } = useParams();
  const [name] = useOutletContext();
  const link = useNavigate();
  useAuth(id,link)
  return (
    <div className="w-screen h-max">
      <Nav data={name} />
      <div className="w-screen h-[514px] bg-[#F5F6F8] flex  items-center">
        <div className="w-10/12 h-max mx-auto flex justify-between items-center">
          <div className="max-w-[100%] h-max mr-10">
            <h1 className="w-[539px] max-w-[100%] font-bold text-[36px] smallest:text-[40px] xxxs:text-[45px] xxs:text-[53px] xs:text-[60px] sm:text-[75px] leading-none resize mb-6">
              You’ve got a story,{" "}
              <span>
                Post<span className="text-primaryBlue">it</span>.
              </span>
            </h1>
            <p className="font-normal resize w-[538px] max-w-[90%] text-[20px] leading-9 tracking-[0.02em] text-black mb-10">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.
            </p>
          </div>
          <img
            src={wordBoard}
            alt=""
            className="hidden cxl:inline-block w-[50%]"
          />
        </div>
      </div>
      <FeedContent/>
      <Footer />
    </div>
  );
};

export default Feed;
