const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser") // middleware

// validations and custom messages for submitting user data
const create_validation_checks = [
    body("email", "Enter valid email").isEmail(),
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("password", "Enter valid password").isLength({ min: 5 }),
]

const login_validation_checks =[
    // multiple checks for email field
    body("email","Enter a valid email").isEmail(),
    body("email","email not present").exists(),
    body("password","Password cant be blank").exists() //if password field not present
]

// secret for jwt token
const JWT_SECRET = ";adsjfldasjfldgjlkdgfdklglkfjglueouroejrlejrlenf,dnf,"

// ROUTE 1 : Creating a user. POST "/api/auth/createuser". No auth required
router.post("/createuser", create_validation_checks,
    async (req, res) => { // it must be a asynchronous function so that database operations occur smoothly
        const errors = validationResult(req);
        // sending Bad Request if error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // If not error then proceed

        // Checking existance of user
        try {
            let req_user = await User.findOne({ email: req.body.email });
            if (req_user) {
                return res.status(400).json({ errors: "User already exists" });
            }
            // If user not exists then do this

            // creating salts and password hash. They both return a Promise
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password , salt);

            const new_user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email
            })
            
            // data for jwt token
            const data = {
                id : new_user.id
            }
            
            // signing the token
            const authtoken = jwt.sign(data , JWT_SECRET)
            console.log({authtoken})
            res.json({authtoken})
        } catch (error) {
            res.status(500).json({"error":"some problem occured..."})
            console.log(error)
        }
    })


// ROUTE 2: Authenticate the user using post. NoLogin required
router.post("/loginuser",login_validation_checks,
async (req , res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        // if user not exists
        if(!user){
            return res.status(400).json({error:"Plz check the credentials"})
        }

        // if user exists check the password hash with queried user password hash
        const password_compare = await bcrypt.compare(password , user.password)
        
        // password not matching
        if (!password_compare){
            res.status(400).json({error:"Plz check the credentials"})
        }
        
        // password matching
        const data = {
            user:{
                id:user.id
            }
        }
        authtoken = jwt.sign(data , JWT_SECRET)
        res.json({authtoken})

    } catch (error) {
        res.status(500).json({"error":"some problem occured..."})
        console.log(error)
    }
})

// ROUTE 3 : Post Getting logged in User detail. Login required. Here we will send the jwt token
router.post("/getuser", fetchuser , // fetchuser is the middleware
async (req,res)=>{
    try {
        const userid = req.user.id;
        // making an object using the authtoken did from fetchuser middleware consisting of details except the password
        const user = await User.findById(userid).select("-password");//excluding the password field using - flag
        res.send({user})
    } catch (error) {
        
    }
})
module.exports = router