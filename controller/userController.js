async function handleUserRegistration(req,res) {
    try {
        // logics to implements user registration
        console.log(req.body);
        const {username,name,email,dob,number,gender,address,profile_image,password,otp} =req.body;
        
        console.log(username);
        return res.json({
            status:true,
            message:"User Registration Successful..",
            data:req.body
        });
        
    } catch (error) {
        console.error("Error during registration",error)
        return res.json({
            status:false,
            message:"An error occured during registration. Please try again"
        });
        
    }
      
}

module.exports={
    handleUserRegistration
}