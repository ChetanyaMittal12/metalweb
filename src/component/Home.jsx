import React,{useState} from 'react'
import Navbar from './Navbar'
import "../index.css"
import money from "../image/money.jpg"
import ingot from "../image/ingotbg.jpg"
import slab from "../image/slab.jpg"
import Firebase from '../Firebase.js'
const Home = () => {
  let [storedata,setstoredata]=useState(
    {
      name:"",
      phone:"",
      email:"",
      message:""
    }
  )
  function handlesubmit(e){
    e.preventDefault()
    if(!storedata.name&&!storedata.phone&&!storedata.email&&!storedata.message){
      alert("Kindly Fill all the details")
      return;
    }
    else{
      Firebase.child("mittal-metal").push(storedata)
      .then(()=>{
        
        console.log("data stored");
        
        setstoredata(
          {
            name:"",
            phone:"",
            email:"",
            message:""
          }
        )
        // .catch((error)=>{
        //   alert("Something went wrong")
        //   console.log(error);
          

        // })
      })
    }
    
    
  }
  return (
    <div className='home-parent'>
      <Navbar />

      <div className='home-image' id='home'>
        <h1>Welcome to Mittal Metal Industries</h1>
        <button className='home-btn'>
        <a href="#contact">
        Contact us
        </a>
        </button>
      </div>

      {/* Feature Section */}
      <div id='about'>
      <center>
        <h1>
          our features
        </h1>
      </center>
      <div className="about-us">
        <div className="about-box">
          <img
            className='about-image'
            src={slab}
            alt="High quality material"
          />
          <div>
            <h1>High Quality Material</h1>
            <p>We provide high-quality aluminium ingots made from premium raw materials, ensuring excellent purity, strength, and performance. Our ingots meet international standards and are ideal for various industrial applications. With strict quality control and advanced processes, we deliver consistent, reliable products you can trust for every use.</p>
          </div>
        </div>

        <div className="about-box">
          <img
            className='about-image'
            src={ingot}
            alt="High quality material"
          />
          <div>
            <h1>trusted and relaible product</h1>
            <p>We manufacture trusted and reliable aluminium ingots with high purity and strength. Our products meet international standards and are ideal for industrial use. With strict quality control and advanced technology, we ensure consistent performance and long-term dependability in every ingot we deliver.</p>
          </div>
        </div>

        <div className="about-box">
          <img
            className='about-image'
            src={money}
            alt="High quality material"
          />
          <div>
            <h1>Affordable prizes</h1>
            <p>We offer high-quality aluminium ingots at affordable prices without compromising on purity or performance. Trusted by industries for their strength and consistency, our products combine reliability with cost-effectiveness—making us the smart choice for your aluminium needs.</p>
          </div>
        </div>
      </div>
      </div>
      {/* Contact */}
      <div className="contact-form"  id='contact'>
        <center>
          <h1>Contact us</h1>
        </center>
        <form action="" onSubmit={(e)=>{handlesubmit(e)}}>
          <input required value={storedata.name} className='contact-inp' placeholder='Enter you Name'  onChange={(e)=>{setstoredata({...storedata,[e.target.name]:e.target.value})}} name="name"  type="text"  id="" />
          <input required value={storedata.phone} className='contact-inp' placeholder='Enter you Phone'  onChange={(e)=>{setstoredata({...storedata,[e.target.name]:e.target.value})}} name="phone"  type="number"  id="" />
          <input required value={storedata.email} className='contact-inp' placeholder='Enter you E-mail'  onChange={(e)=>{setstoredata({...storedata,[e.target.name]:e.target.value})}} name="email"  type="text"  id="" />
          <textarea required value={storedata.message} className='contact-inp' placeholder='Enter you Message...'  onChange={(e)=>{setstoredata({...storedata,[e.target.name]:e.target.value})}} name="message"  type="text"  id="">
            
          </textarea>
          <button className='contact-btn'  type="submit">Submit</button>
        </form>
      </div>
          {/* Footer */}
          <div className='text-area'>
            &copy; 2025. All rights reserved
          </div>
    </div>
  )
}

export default Home
