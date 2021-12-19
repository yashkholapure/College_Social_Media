const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mern",{useNewUrlParser: true , useUnifiedTopology: true})
.then( ()=>console.log("see success"))
  .catch((err)=>console.log(err))