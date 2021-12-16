const mongoose=require("mongoose");

const jwt = require("jsonwebtoken")
const express = require("express")
const cookieParser=require('cookie-parser')
 const server=express()
 server.use(cookieParser())

 const postSchema=new mongoose.Schema({
    name:{type:String,
        required: true
        // unique:true,
         
         },
         message:{type:String,
            required: true
             
             },
             creatAt:{
                type:Date,
                default:Date.now
             },
               selectedFile: {
                  type:String
               }
 })

 const All= new mongoose.model("All",postSchema)

module.exports=All;