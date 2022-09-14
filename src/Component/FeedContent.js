import React, { useEffect, useState } from 'react'
import {BsArrowRight} from "react-icons/bs"
import { useNavigate, useParams } from 'react-router-dom'
import Creation from './Creation'
const FeedContent = () => {
  const [data, setData] = useState(null)
  const link = useNavigate()
  const {id} = useParams()
  const allBlog = async()=>{
    const res = await fetch("http://localhost:7500/blogs")
    const data = await res.json()
    setData(data)
  }
  useEffect(()=>{
    allBlog()
  },[])
  return (
    <div className='w-screen'>
      <div className='max-w-[87%] xxs:max-w-[90%] w-max mx-auto grid sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 justify-center gap-x-[51px] gap-y-[68px] mt-[69px] mb-[100px]'>
      {data &&
        data.map((blog)=>{
          return(
            <div className='max-w-[379px] resize' key={blog._id}>
            <h1 className=" font-semibold text-[28px] leading-[50px] max-w-[587px] mb-4 break-words">{blog.title}</h1>
            <Creation ownerId={blog.ownerId} date={blog.createdAt}/>
            <p className="w-full text-[16px] leading-[27px] break-words">{`${blog.content}`.substring(0, 200)}<span className=" text-primaryBlue font-bold block cursor-pointer" onClick={()=> link(`/app/${id}/readmore/${blog._id}`)}><BsArrowRight className='inline-block'/> Read More...</span></p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default FeedContent