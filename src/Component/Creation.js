import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Creation = ({ownerId, date}) => {
  const link = useNavigate();
  const [data, setData] = useState(null)
  const creator = async()=>{
    const res = await fetch(`http://localhost:7500/readmore/${ownerId}`,{
        method: "GET",
        headers: {"Content-Type": "application/json"},
        credentials:"include"
  })
  const datas = await res.json()
  if (datas.redirect) {
    return link(data.redirect)
  }
  setData(datas)
  }
  useEffect(() => {
    creator()// eslint-disable-next-line
  }, [])
  
  return (
    <div>
      {data && <p className="text-[#9A9A9A] text-[12px] sm:text-[13px] tracking-[0.02em]">By <span className="text-primaryBlack font-medium">{data.username}</span> <span className=" m-2">-</span>{new Date(date).toDateString().substring(4)}</p>}
    </div>
  )
}

export default Creation