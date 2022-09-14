import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useAuth from "./useAuth";
import Nav from "./NavBar"
import Footer from "./Footer";
import {BsTwitter} from "react-icons/bs"
import {AiFillFacebook} from "react-icons/ai"
import {RiWhatsappFill} from "react-icons/ri"
const ReadMore = () => {
  const { id, ids } = useParams();
  const [name] = useOutletContext();
  const link = useNavigate();
  const [data, setData] = useState("")
  const [data2, setData2] = useState("")
  const [style, setStyle] = useState({backgroundColor:"#000000"})
  useAuth(id,link)
  const singleBlogs = async()=>{
    if (ids.length !== 24){
      return link("/error")
    }
    const res = await fetch(`http://localhost:7500/blogs?blog=${ids}`)
    const data = await res.json()
    if (data.redirect) {
      return link(data.redirect)
    }else{
      setData(data)
      const res = await fetch(`http://localhost:7500/readmore/${data.ownerId}`,{
        method: "GET",
        headers: {"Content-Type": "application/json"},
        credentials:"include"
      })
      const datas = await res.json()
      if (datas.redirect) {
        return link(data.redirect)
      }
      setData2(datas)
      if (data.categories === "Technology") {
        setStyle({backgroundColor:"#6397E5"})
      }else if(data.categories === "Nature") {
        setStyle({backgroundColor:"#41D750"})
      }else if(data.categories === "Sports") {
        setStyle({backgroundColor:"#F42A2A"})
      }else if(data.categories === "Lifestyle") {
        setStyle({backgroundColor:"#E5BF5E"})
      }
      
    }
  }
  useEffect(() => {
    singleBlogs()// eslint-disable-next-line
  }, [])
  return (
    <div className='w-screen'>
      {data2 &&
      <> 
      <Nav data={name}/>
      <div className="w-[86%] xs:w-10/12 mx-auto">
        <p className="w-max px-3 text-[17px] text-[#FDFEFF] rounded-md mt-[43px]" style={style}>{data.categories}</p>
        <h1 className="font-bold text-[35px] xxxs:text-[40px] xxs:text-[47px] xs:text-[52px] sm:text-[56px] md:text-[58px] lg:text-[62px] 2xl:w-[1300px] max-w-[100%] leading-[1.1em] mt-[28px] mb-[22.5px] text-primaryBlack">{data.title}</h1>
        <div className="w-full border-b pb-[26.7px] border-[#DDDDDD] mb-14">
        <p className="text-[#9A9A9A] text-[18px] xs:text-[20px] sm:text-[22px] tracking-[0.02em]">By <span className="text-primaryBlack font-medium">{data2.username}</span> <span className=" m-2">-</span>{new Date(data.createdAt).toDateString().substring(4)}</p>
        </div>
        <p className="mb-[67px] text-[18px] smallest:text-[18px] xxs:text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] leading-[1.7em] text-[#7B7B7B]">{data.content}</p>
        <p className="mb-[108px] text-[24px] xs:text-[28px] leading-10 text-left">Share Post  :<BsTwitter className="text-[#55ACEE] inline-block ml-[24px]"/><AiFillFacebook className="text-[#395185] inline-block ml-[20px] mr-[20px]"/><RiWhatsappFill className="text-[#00E676] inline-block"/></p>
      </div>
      <Footer/>
      </>
      }
    </div>
  )
}

export default ReadMore