const mongoose=require("mongoose");

//load .env variables
require("dotenv").config();
const MONGO_URL =process.env.MONGO_URL || "mongodb://127.0.0.1:27017/usermsystem";

const connectDB = async() =>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected successfully.")
    }
    catch(error)
    {
        console.error("Error connecting to mongoDB : ", error.message);
    

    }

};

module.exports=connectDB;
