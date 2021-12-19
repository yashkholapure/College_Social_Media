import React,{useState,useEffect} from 'react'
 import moment from "moment" 
  import axios from "axios"

const Home = () => {

      
        //    const [stuData,setStud]=useState([])
        //    useEffect(()=>{
        //      fetch('/allpost',{
        //         headers: {"Content-Type":"application/json"},
        //      }).then(res=>res.json())
        //      .then(result=>{
        //          console.log(result)
        //          setStud(result.messages)
        //      })
        //    },[])
         
        
        //  const tableRow=stuData.map((info)=>{
        //      return(
        //          <tr>
        //              <td>{info.userData}</td>
        //          </tr>
        //      )
        //  })
        const [userData,setUserData]=useState([]);

        const userContact=async()=>{
            try{
             const res=await fetch('/allpost',{
            method:"GET",
            headers: {"Content-Type":"application/json"},
             //credentials:"include"
             
        })
        console.log("tufdgf")
        //const data=await res.json()
        // const che=await res.text() 
        // console.log(che)

           const data= await res.json();
           

         
        console.log("pk")
         console.log(data)
          setUserData(data)
         console.log("pjkk")
         
          //setUserData({...userData,name:data.name})
         
         console.log("aaja")
          console.log(userData)
        if (!res.status===200) {
             console.log("tufd")
            const error=new Error(res.error)
            throw error
            
        }
        
            }catch(err){
                console.log("err")
                 
                console.log(err)
                
                //navigate("/login")
            }
        }
        
        useEffect(() => {
            userContact();
             
        }, [])
             
           

         console.log("trying")
         console.log(userData.sort(byDate))
         console.log("sorting succesful")
         function byDate(a,b){
           return new Date(b.creatAt).valueOf()-new Date(a.creatAt).valueOf()
         }


    return (
        <>
         <div className="con"> 
            <h1>WELCOME</h1>
             <br></br>
             <br></br>
             <br></br>
                       <div className="c1">
                       {/* <div> */}
                         {
                              userData.map(items=>{
                     return(
                         <>
                           <div className="cardcon">
                          <div className="cards"> 
                        <div className="userinfo"> 
                            <p className="user">   Name:{items.name} </p>
                          
                         <p className="time">{moment(items.creatAt).fromNow()}</p>
                          
                         <hr/>
                         </div>
                        
                        <div className="cardmsg"> <p className="msg">  {items.message} </p></div>
                           <div className="cardimg"> 
                               <img className="img" src={items.selectedFile}/> 
                               </div>
                          
                            </div>
                            </div> 
                          </>
                     )
                    })}
                      </div>
                   </div>   
             
        </>
    )
}

export default Home
