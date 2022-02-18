const express = require("express");
const router = express.Router()
const { body, validationResult } = require('express-validator');
const fetchuer = require("../middleware/fetchuser")
const Notes = require("../models/Notes")

const new_note_validations =[
    body("title","Enter a valid a title atleast 3").isLength({min : 3}),
    body("description","Enter a valid description of atleast 5").isLength({min : 5})
];

// ROUTE 1: Get all the Notes using GET http://localhost:5000/api/notes/fetchallnotes
router.get("/fetchallnotes" , fetchuer , async(req , res)=>{
    // getting notes 
    const notes = await Notes.find({user : req.user.id});//user is already appended in the req using fetchuser middleware
    // sending notes as response
    res.json(notes)
})

// ROUTE 2: Add a new note using POST http://localhost:5000/api/notes/addnewnote. Login Required.
// Make sure you have auth-token in the request header and fetchuser middleware
router.post("/addnewnote",new_note_validations,fetchuer,async (req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }
        const {title , description , tag} = req.body;
    
        // creating notes using object desctructuring
        const note = await new Notes({
            title , description , tag , user:req.user.id
        })
        const saved_notes = await note.save()
        res.json(saved_notes)
    } catch (error) {
        res.status(500).json({"error":"some problem occured..."})
        console.log(error)
    }
})

// ROUTE 3 : update an existing note.Put http://localhost:5000/api/notes/updatenote/:id. Login Required.
router.put("/updatenote/:noteid",fetchuer, async (req,res)=>{
    const {title , description , tag} = req.body;
    const newNote = ({
        title,description,tag
    })
    
    // checking existance of the note
    const note = await Notes.findById(req.params.noteid);
    if(!note){return res.status(404).send("Not found")};

    // authorizing user id matching with the user id in the notes 
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed")
    }

    // find the note to be updated
    const create_new_note = await Notes.findByIdAndUpdate(req.params.noteid , {$set : newNote},{$new:true});
    res.json(create_new_note)
} )
module.exports = router