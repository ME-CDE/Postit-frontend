import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const NavBar = () => {
  const link = useNavigate();
  const [side, setSide] = useState(false);
  const {id} = useParams();
  return (
      <nav className="navBar w-full bg-almostWhite h-[92px] relative z-10 shadow-[0_4px_5px_-2px_rgba(0,0,0,0.25)]">
        <div className="w-10/12 mx-auto h-full flex items-center justify-between text-primaryBlack ">
          <h3 className=" text-4xl w-max font-bold cursor-pointer" onClick={() => link(`/app/${id}`)}>
            Post<span className="text-primaryBlue">it</span>.
          </h3>
          <ul className="items-center text-[24px] gap-x-[30px] md:flex hidden font-normal">
            <li>
              <a href="#stories">Stories</a>
            </li>

            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <MdMenu
            className="text-[34px] md:hidden"
            onClick={() => setSide(!side)}
          />
          {side && (
            <ul className=" fixed top-0 right-0 bg-almostWhite w-full xxs:w-9/12 h-screen  text-[24px] flex flex-col gap-y-[30px] pl-10 pt-28 md:hidden shadow-xl z-[200]">
              <CgClose
                className="absolute top-[34px] right-[32px] text-3xl"
                onClick={() => setSide(false)}
              />
              <li>Stories</li>
              <li>Contact</li>
            </ul>
          )}
        </div>
      </nav>
  )
}

export default NavBar