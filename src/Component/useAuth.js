import {useEffect} from 'react'
const useAuth = (id, link) => {
  const data = async()=>{
    const res = await fetch(`http://localhost:7500/app/${id}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
      credentials:"include"
    })
    const data = await res.json()
    if (data.redirect) {
      link(data.redirect)
    }
  }
  useEffect(() => {
    data();// eslint-disable-next-line
  }, [])
}

export default useAuth