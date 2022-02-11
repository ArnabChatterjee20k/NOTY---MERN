const express = require("express");
const User = require("../models/User");
const router = express.Router()

// Creating a user. POST "/api/auth/". No auth required
router.post("/" , (req , res)=>{
    const user = User(req.body)
    user.save()
    .then(()=>{
        console.log("User Created😍")
        res.send(req.body)
    })
    .catch(()=>{
        console.log("Problem occured!🤬")
        res.json({status:"problem occured 🤬"})
    })
    
})

module.exports = router