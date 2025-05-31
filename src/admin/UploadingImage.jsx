import React, { useEffect, useState } from 'react'
import Firebase from "../Firebase.js"
import "./Upload.css"
const UploadingImage = () => {
    let [store,setstore]=useState("")
    let [base64image,setbase64image]=useState({})
    let [setectedImage,setsetectedImage]=useState("")
    function handlechange(e){
        e.preventDefault();

        let file = e.target.files[0];
        if(file){
            let reader = new FileReader();
            reader.onloadend = () =>{
                setbase64image(reader.result);
            }
            reader.readAsDataURL(file);
            setsetectedImage(file.name);
        }
        console.log({
                base64image,
                setectedImage
                        });
        
    
   
    }
        function handleupload(){
            let value = {
                base64image
                    ,imageInfo:setectedImage
                
                        }
            Firebase.child("image-data").push(value,(err)=>{
        if(err){
            console.log(err);
            
        }
        else{
            alert("Data uploaded")
        }
    })
    }
     useEffect(()=>{
            Firebase.child("image-data").on("value",(snapshot)=>{
                let  result = snapshot.val()
                setstore(result)
                console.log(result);
                
            })
    },[])
                        
    function HandleDelete(e,key){
        if(key){
            Firebase.child(`image-data/${key}`).remove((err)=>{
                if(err){
                    console.log(`Error Occured/${err}`);
                    

                    
                }
                else{
                    console.log("data deleted");
                    
                }
            })
        }
    }
        
            
  return (

    <div>
        <div className="parent">
            <div className="upload-parent">
        <h1>Upload Images</h1>
        <input type="file" onChange={(e)=>{handlechange(e)}} />
        {
            setectedImage && <img
            className='base64-image'
            src={base64image} alt='selectedImage' />
        }
        <button onClick={()=>handleupload()}>
            Upload
        </button>
        </div>
        <div className="store">
        {
        store && Object.keys(store).map(function(value,index){
            return(
                    <div className="Container"  key={index}>
                        <img
                        className='upload-image'
                        src={store[value].base64image} alt="" />
                        <i
                        onClick={(e)=>{HandleDelete(e,value)}}
                        className="fa">&#xf014;</i>
                    </div>

            )
        })
        }
        </div>
        </div>
    </div>
  )
}

export default UploadingImage