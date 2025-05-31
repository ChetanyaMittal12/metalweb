import React, { useEffect, useState } from 'react'
import Firebase from '../Firebase.js'
import "./Contact.css"
const ContactQuaries = () => {
    let [store,setstore]=useState({})
     useEffect(()=>{
 Firebase.child("mittal-metal").on("value",(data)=>{
            let value = data.val()


            if(value){
                setstore(value)
                console.log("data retrived");
                
            }
            else{
                setstore({})
                console.log("data not retrived");
                
            }

            
    })
     },[])
     
            function tabledelete(value){
   if(value){
            Firebase.child(`mittal-metal/${value}`).remove((err)=>{
                if(err){
                    
                    alert(`Error Occured/${err}`)

                    
                }
                else{
                    console.log("data deleted");
                    
                }
            })
        }
                }
        
    
  return (
    <div>
        <div className='table-parent'>
        <table>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>E-mail</th>
                <th>Message</th>
                
            </tr>
            

                
                    {
                         !store ? "" :
                        Object.keys(store).map((value)=>{
                            
                            return(
                                <tr key={value}>
                    <td>{store[value].name}</td>
                    <td>{store[value].phone}</td>
                    <td>{store[value].email}</td>
                    <td>{store[value].message}</td>
                    <td>
                        <button onClick={()=>{tabledelete(value)}}>
                        Delete
                    </button>
                    </td>
</tr>
                            )
                        
                        })
}
                
            
        </table>
        
        </div>
    </div>
  )
}

export default ContactQuaries