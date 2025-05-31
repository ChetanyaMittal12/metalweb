import React from 'react'
import "./Admin.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../image/logo.png"
const Adminnav = () => {
    let navigate = useNavigate()  


  let Logout= () => {
    sessionStorage.setItem("admin",false)
    
    return navigate("/")
  }

  return (
    <div className='nav-parent'>
      <div>
            <img
            className='logo-image'
            src={logo} alt="logo" />
        
            
      </div>
      <div className='nav-item-parent'>
      <div className='nav-item'>
        <Link 
        className='link'
        to={"UploadingImage"}
        >
        Upload Image
        </Link>
      </div>
      <div className='nav-item'>
        <Link
        className='link'
        to={"ContactQuaries"}
        >Contact Quaries</Link>
      </div>
          
      <button
     onClick={()=>{Logout()}}
      >
        <Link
        className='loglink'
        to={"/Login"}>LogOut</Link>
      </button>
      
      </div>
    </div>
  )
}

export default Adminnav