const express = require("express");
const connectToDb = require("/config/mongo.config")
require("dotenv").config();
const app = express();
const PORT = process.env.PORT||8080


app.get("/",(req,res)=>{
    res.status(200).json({msg:"this is test routes"})
})
application.listen(PORT,()=>{
    connectToDb();

    console.log("server started")
})