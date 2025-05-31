import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Layout from './admin/Layout'
import Dashboard from './admin/Dashboard'
import ContactQuaries from './admin/ContactQuaries'
import UploadingImage from './admin/UploadingImage'
import Portfolio from './component/Portfolio'
import Navbar from './component/Navbar'

const App = () => {
  return (
    
    <Routes>
      <Route element={<Navbar/>} path='/Navbar'/>
      <Route element={<Home/>} path="/"/>
      <Route element={<Login/>} path="/Login"/>
      <Route element={<Layout/>} path='/Admin'>
        <Route element={<Dashboard/>} path="Dashboard"/>
        <Route element={<ContactQuaries/>} path='ContactQuaries'/>
        <Route element={<UploadingImage/>} path='UploadingImage'/>
      

      </Route>
        <Route element={<Portfolio/>} path="Portfolio"></Route>
    </Routes>
  
  )
}

export default App