const mongoose = require("mongoose");
 const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
       // await mongoose.connect("mongodb://127.0.0.1:27017/empher")
        console.log("commect to db")
    } catch(err){

        console.log("error in connecting db")
        console.log(err)
        
    }
 }

 module.export = connectToDb;