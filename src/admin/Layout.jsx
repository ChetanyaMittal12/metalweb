import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Adminnav from './Adminnav.jsx'

const Layout = () => {
    let status =  window.sessionStorage.getItem("admin")
    let navigate = useNavigate()
    useEffect(()=>{
        if(!status){
            navigate("/")
        }
    },[status,navigate])
    if(status){
        return (
            <div>
            <Adminnav/>
            <Outlet/>
            </div>
        )
    }
  
}

export default Layout