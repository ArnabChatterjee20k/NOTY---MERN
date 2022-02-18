const express = require("express");
const router = express.Router()
const fetchuer = require("../middleware/fetchuser")
const Notes = require("../models/Notes")


// ROUTE 1: Get all the Notes using GET http://localhost:5000/api/notes/fetchallnotes
router.get("/fetchallnotes" , fetchuer , async(req , res)=>{
    // getting notes 
    const notes = await Notes.find({user : req.user.id});//user is already appended in the req using fetchuser middleware
    // sending notes as response
    res.json(notes)
})

module.exports = router