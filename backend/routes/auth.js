const express = require("express");
const User = require("../models/User");
const router = express.Router()

const { body, validationResult } = require('express-validator');

// validations and custom messages for submitting user data
const validation_checks = [
    body("email", "Enter valid email").isEmail().withMessage(),
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("password", "Enter valid password").isLength({ min: 5 }),
]

// Creating a user. POST "/api/auth/createuser". No auth required
router.post("/createuser", validation_checks,
    async (req, res) => {
        const errors = validationResult(req);
        // sending Bad Request if error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // If not error then proceed

        // Checking existance of user
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ errors: "User already exists" });
            }
            // if user not exists then do this
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            })
            const response = {
                status: 'done',
                credentials: req.body
            }
            res.json(response)
        } catch (error) {
            res.status(500).json({"error":"some problem occured..."})
            console.log(error)
        }
    })

module.exports = router