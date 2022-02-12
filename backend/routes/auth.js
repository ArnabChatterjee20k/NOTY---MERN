const express = require("express");
const User = require("../models/User");
const router = express.Router()

const { body, validationResult } = require('express-validator');

const validation_checks = [
    body("email", "Enter valid email").isEmail().withMessage(),
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("password", "Enter valid password").isLength({ min: 5 }),
]

// Creating a user. POST "/api/auth/". No auth required
router.post("/", validation_checks, (req, res) => {
    const user = User(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    User.create({
        name: req.body.name,
        password: req.body.password,
        email : req.body.email
    })
    .then(user => res.json(user))
    .catch((err)=>{
        res.json((
            {
                error:"Some problem occured 🤬",
                message:err.message
            }
        ));
        console.log("😡 "+err)
    })
    ;
})

module.exports = router