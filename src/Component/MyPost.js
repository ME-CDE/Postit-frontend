import React, {useEffect, useState} from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useAuth from "./useAuth";
import Nav from "./NavBar"
import Footer from "./Footer";

const MyPost = () => {
  const {id} = useParams()
  const link = useNavigate()
  const [data, setData] = useState(null)
  const [name] = useOutletContext();
  useAuth(id,link)
  const allBlogs = async()=>{
    const res = await fetch(`https://postiitt.herokuapp.com/blogs?ownerId=${id}`)
    const datas = await res.json()
    setData(datas)
  }
  useEffect(() => {
    allBlogs()// eslint-disable-next-line
  }, [])
  const handleDelete=async(e,ids)=>{
    e.preventDefault()
    const res = await fetch(`https://postiitt.herokuapp.com/blogs?ownerId=${id}&blog=${ids}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    const data = await res.json()
    setData(data)
  }
  return (
    <div className="w-screen h-max">
      {data && <>
      <Nav data={name}/>
      <div className="w-10/12 mx-auto">
      <div className="w-full h-max flex justify-between items-center mb-[43px] mt-[49px]">
        <h1 className="font-bold text-[28px] smallest:text-[30px] xxs:text-[36px] xs:text-[45px] sm:text-[62px] tracking-[0.02em] text-primaryBlack">My Stories</h1>
        <button onClick={()=> link(`/app/${id}/create`)} className="w-[100px] smallest:w-[110px] xxs:w-[140px] xs:w-[167px] sm:w-[197.42px] h-[44px] smallest:h-[49px] xs:h-[54.84px] text-[20px] xxs:text-[25px] xs:text-[31px] text-[#F0F8FF] bg-primaryBlack rounded-md">Write Story</button>
      </div>
      <h2 className="w-full text-left border-b border-[#DDDDDD]  text-[37.6032px] leading-[64px] mb-[72px]">All</h2>
      </div>
      <div className="w-10/12 mx-auto flex flex-col cxl:gap-y-14 gap-y-20 cxl:mb-14 mb-20">
        { data &&
          data.map((blog)=>{
            return(
            <div key={blog._id} className="w-full tracking-[0.02em] flex justify-between 2xl:justify-center 2xl:gap-x-16 flex-col cxl:flex-row gap-y-7">
              <div className="max-w-[106%] w-[716px] cxl:mr-12">
              <h1 className=" font-semibold text-[28px] leading-[50px] max-w-[587px] mb-4 break-words">{blog.title}</h1>
              <p className="w-full text-[21.9352px] leading-[42px] break-words">{`${blog.content}`.substring(0, 200)} <span className=" text-primaryBlue font-bold cursor-pointer" onClick={()=> link(`/app/${id}/readmore/${blog._id}`)}> Read More...</span></p>
              </div>
              <div className="flex gap-x-6 relative top-3">
                <button className="w-[164.5px] h-[51.7px] rounded-lg text-[#F0F8FF] bg-primaryBlue text-[28px]" onClick={()=>link(`/app/${id}/update/${blog._id}`)}>Edit Post</button>
                <button className="w-[164.5px] h-[51.7px] rounded-lg border border-primaryBlue text-primaryBlue text-[28px]" onClick={(e)=>handleDelete(e,blog._id)}>Delete</button>
              </div>
            </div>
            )
          })
        }
        {(!data || data.length === 0) &&
          <div className="w-10/12 mx-auto h-52 flex justify-center items-center text-primaryBlack/[0.3] text-3xl">
            <p className="w-max">No Blog yet.</p>
          </div>
        }
      </div>
      <Footer/>
      </>
      }
    </div>
  )
}

export default MyPost