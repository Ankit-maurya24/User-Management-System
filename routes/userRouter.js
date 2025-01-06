const express =require("express");
const { handleUserRegistration } = require("../controller/userController");
const router =express.Router();

router.post("/",handleUserRegistration);

module.exports = router