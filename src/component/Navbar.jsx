import React from 'react'
import "./navbar.css"
import { Link, Links, useNavigate } from 'react-router-dom'
import Portfolio from './Portfolio'
import logo from "../image/logo.png"
const Navbar = () => {
  let nav = useNavigate()
  return (
    <div>
        <nav className='navbar'>
            <div className='logo-parent'>
              <a href="#home">
              <img src={logo} alt="logo" />
              </a>
                <span>
                  <a href="#home">
                  MITTAL METAL INDUSTRIES
                  </a>
                  </span>
            </div>
            <div className='nav-item-parent'>
                <div
                onClick={()=>nav("/")}>
                  <a href='#home'>
              Home
              </a>
              </div>
                <div>
                  <a href='#about'>
                  About
                  </a>
                  </div>
                <div>
                  <a href="#contact">
                  Contact Us
                  </a>
                  </div>
                <div onClick={()=>nav("/Portfolio")}>
                  <a>
                  Portfolio
                  </a>
                </div>
                <div>
                    <button className='login' 
                    onClick={()=>nav("/Login")}
                    >
                    
                    Login
                    
                    </button>
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar