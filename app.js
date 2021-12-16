 const dotenv=require("dotenv");
//const mongoose=require('mongoose')
const express = require("express")
const app=express()
 const jwt = require("jsonwebtoken")
 const cookieParser=require('cookie-parser')
 const bodyParser =require("body-parser")
  
 app.use(bodyParser.json({ limit: "10mb", extended: true }));
 app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser())
//dotenv.config({path: './config.env'})
dotenv.config({ path: `${__dirname}/config.env` });

require("./db/conn")
//const User=require("./models/schema")
app.use(express.json());

app.use(require('./router/auth'))

const port=process.env.PORT || 5000;

// const middleware=(req,res,next)=>{
//   console.log("hello middleware")
//   next()
// }

 

// app.get("/",(req,res)=>{
//     res.send(`youtube app`)
// })
// app.get("/reg",(req,res)=>{
//     res.send(`youtube reg`)
// })
// app.get("/login",(req,res)=>{
//     res.send(`youtube login`)
// })
// app.get("/post",(req,res)=>{
//     console.log("post")
//     res.send(`youtube post`)
// })
console.log(`connection i s set up at  `)
 
//step heroku

if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"))
}

app.listen(port,()=>{
    console.log(`connection is set up at ${port}`)
})