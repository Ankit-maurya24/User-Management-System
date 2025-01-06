const express =require("express");
const dotenv =require("dotenv");
const userRouter =require("./routes/userRouter");
const connectDB =require("./dbconnection/dbConnect");
const app =express();

// load environment variable form .env file
dotenv.config();
const PORT=process.env.PORT || 3000;

// middlewares
app.use(express.urlencoded({extended:true}));

// db connection
connectDB();

// configure routes
app.use("/",userRouter);



// run server 
app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT : ${PORT}`);
});