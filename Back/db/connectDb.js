//import mongoose from "mongoose";
const mongoose=require("mongoose");
const connectDB=async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS={
            dbName:'ads'
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected Successfully...");
    }catch(err){
        console.log(err);
    }
}
module.exports=connectDB;