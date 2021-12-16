//const jwt = require("jsonwebtoken")
const dotenv=require("dotenv");
const jwt = require("jsonwebtoken")
const User = require("../model/schema")

 const express=require('express')
 //const cookieParser=require('cookie-parser')
 //const app=express()
 //app.use(cookieParser())

dotenv.config({path: './config.env'})
const Authenticate=async(req,res,next)=>{

    try{
         //const token = req.cookies.jwtoken
           
        const token=req.cookies.jwtoken;
         //const verifyToken=  jwt.verify(token,process.env.KEY)
         const verifyToken =  jwt.verify(token,process.env.SECRET_KEY)
         
         const rootUser=await User.findOne({ _id: verifyToken._id,  'tokens.token' :token });
         
if (!rootUser) {
    throw new Error('user not found')
}
req.token=token
req.rootUser=rootUser
req.userID=rootUser._id

next()

    }catch(err){
        res.status(401).send('unauthorized: no token provided')
        console.log(err)
         
        console.log("errr")
        
    }
}

module.exports=Authenticate 