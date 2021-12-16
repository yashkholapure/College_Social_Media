import React,{useEffect,useState} from 'react'
//import {useNavigate} from 'react-router-dom'
//import {Link,useNavigate} from 'react-router-dom'
 import FileBase from "react-file-base64"
const Post = (props) => {
     //const navigate=useNavigate()
//const [userData,setUserData]=useState({name:"",message:""})
const [userData,setUserData]=useState({name:"",message:"",selectedFile:""})

const userContact=async()=>{
    try{
     const res=await fetch('/getdata',{
    method:"GET",
    headers: {"Content-Type":"application/json"},
     //credentials:"include"
})
console.log("tufdgf")
//const data=await res.json()
const data= await res.json();
console.log("pk")
 console.log(data)
 //setUserData({...userData,name:data.name})
 setUserData({...userData,name:data.name})
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

const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserData({...userData,[name]:value})
   
}

// const onChangeFile=(e)=>{
//     setUserData(e.target.files[0])
// }

const contactForm=async(e)=>{
    e.preventDefault()

    const {name,message,selectedFile}=userData
     
const res=await fetch('/all',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name,message,selectedFile
    })
})
const data=await res.json()
console.log(data)
 if (!data) {
     console.log("message not send")
 }else{
     alert("message is posted")
     setUserData({...userData,message:"",selectedFile:""})
     console.log("setit")
     console.log(userData)
     // props.func(userData)
      
 }
 //const val=[userData]
    
//this.props.func(val);
//props.func(val) 
}

    return (
         <>
           
         <div className="containercre">
    <form method="POST" className="reg-form" id="reg-form">
        {/* <h1>create</h1>
        <hr/> */}
          
         <div className="row">  
        <p><label>Name</label><input className="in" type="text" name="name"  value={userData.name} readOnly
         onChange={handleInputs}
        placeholder="enter name" required/></p>

       
    <p>
       <label>Post:</label>  
       <br/>
        <textarea className="cre" name="message" id="post"  rows="4" cols="100"   value={userData.message} 
         onChange={handleInputs} 
        placeholder="enter message"></textarea>
    </p> 
    </div>
         
    {/* <p>
        create: 
        <textarea name="create" id="create"  rows="10" cols="100" placeholder="create Post"></textarea>
    </p> */}
     

       {/* <div className="file-field input-field">
      <div className="btn">
        <span>Upload image</span>
        <input name="photo" type="file" value={userData.photo} 
         //onChange={handleInputs}
        />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>   */}

    <div className="pho">
    <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
              setUserData({ ...userData, selectedFile: base64 })
              }
            />
    </div>

     <div className="po">
    <button type="submit" onClick={contactForm} id="Post" >post</button>
    </div>
    </form>
</div>
         </>
    )
}

export default Post
