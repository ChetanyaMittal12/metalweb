import React, { useEffect, useState } from 'react'
import Firebase from '../Firebase'
import  "./portfolio.css"
import Navbar from './Navbar'
const Portfolio = () => {
    let [storeImage,setstoreImage]=useState({})
    
    useEffect(()=>{
    Firebase.child("image-data").on("value",(value)=>{
        let data = value.val()
        if(data){
            setstoreImage(data)
            console.log(data);
            
        }
        else{
            setstoreImage([])
            console.log("data not retieved");
            
        }
    })
    },[])
  return (
    <div>
        <Navbar/>
        <h1>
            Client Work
        </h1>
        <div className='gallery'>
        
            {
                Object.keys(storeImage).map((key)=>{
                      return (
                    <img key={key} src={storeImage[key].base64image} alt={storeImage[key].imageInfo} />
  );

                })
            }
        
        </div>
    </div>
  )
}

export default Portfolio