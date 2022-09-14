import React ,{useEffect, useState} from 'react'
import { Outlet, useNavigate, useParams} from "react-router-dom";

const MainApp = () => {
  const link = useNavigate();
  const {id} = useParams();
  const [dta, setDta] = useState({})
  const data = async()=>{
    const res = await fetch(`http://localhost:7500/app/${id}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
      credentials:"include"
    })
    const data = await res.json()
    if (data.redirect) {
      link(data.redirect)
    }else{
      setDta(data)
    }
  }
  useEffect(() => {
      data();// eslint-disable-next-line
  }, [])
  return (
    <div className='MainApp font-harmattan overflow-x-hidden'>
      {data && <Outlet context={[dta]}/>}
    </div>
  )
}

export default MainApp