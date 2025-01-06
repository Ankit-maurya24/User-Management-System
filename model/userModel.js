const mongoose =require("mongoose");

// create user schema
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        // required:true,
    },
    name:{
        type:String,
        required:[true, "Name is required"],
        trim:true
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
    dob:{
        type:Date,
        required:[true, "Date of birth is required"]
    },
    number:{
        type:String,
        required:[true, "Number is required"],
        trim:true,
        match:[/^\d{10}$/, "Please provide a valid 10-digit phone number"],
    },
    gender:{
        type:String,
        enum:["male","female","other"],
        required:[true, "Gender id required"]
    },
    address:{
        type:String,
        trim:true,
        required:[true, "Address is required"]
    },
    profile_image:{
        type:String,
        default:"default profile img.png"
    },
    otp:{
        type:String,

    },
    password:{
        type:String,
        required:[true, "Password is required"],
        maxlength:[5,"Password must be at least 5 digit"]
    },
    
},{ timestamps:true });

// create user model
const User = mongoose.model("user", userSchema);
module.exports=User;