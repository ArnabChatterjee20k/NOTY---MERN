const express = require("express");
const router = express.Router()
const { body, validationResult } = require('express-validator');
const fetchuer = require("../middleware/fetchuser")
const Notes = require("../models/Notes")

const new_note_validations = [
    body("title", "Enter a valid a title atleast 3").isLength({ min: 3 }),
    body("description", "Enter a valid description of atleast 5").isLength({ min: 5 })
];

// ROUTE 1: Get all the Notes using GET http://localhost:5000/api/notes/fetchallnotes
router.get("/fetchallnotes", fetchuer, async (req, res) => {
    try {
        // getting notes 
        const notes = await Notes.find({ user: req.id });//user is already appended in the req using fetchuser middleware
        // sending notes as response
        res.json(notes)
    } catch (error) {

        res.status(500).json({ "error": "some problem occured..."})
        console.log(error)
    }

})

// ROUTE 2: Add a new note using POST http://localhost:5000/api/notes/addnewnote. Login Required.
// Make sure you have auth-token in the request header and fetchuser middleware
router.post("/addnewnote", new_note_validations, fetchuer, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
        }
        const { title, description, tag } = req.body;

        // creating notes using object desctructuring
        const note = await new Notes({
            title, description, tag, user: req.id
        })
        const saved_notes = await note.save()
        res.json(saved_notes)
    } catch (error) {
        res.status(500).json({ "error": "some problem occured..." })
    }
})

// ROUTE 3 : update an existing note.Put http://localhost:5000/api/notes/updatenote/:id. Login Required.
router.put("/updatenote/:noteid", fetchuer, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const newNote = ({
            title, description, tag
        })

        // checking existance of the note
        const note = await Notes.findById(req.params.noteid);
        if (!note) { return res.status(404).send("Not found") };

        // authorizing user id matching with the user id in the notes 
        // if (note.user.toString() !== req.id) {
        //     return res.status(401).send("Not Allowed")
        // }

        // find the note to be updated
        const create_new_note = await Notes.findByIdAndUpdate(req.params.noteid, { $set: newNote }, { $new: true });
        res.json(create_new_note)
    } catch (error) {
        res.status(500).json({ "error": "some problem occured..." })
    }
})

// ROUTE 4 : update an existing note.Delete http://localhost:5000/api/notes/deletenote/:noteid. Login Required.
router.delete("/deletenote/:noteid", fetchuer, async (req, res) => {
    try {
        // checking existence of note
        const note = await Notes.findById(req.params.noteid);
        // console.log(req.params.noteid)
        if (!note) { return res.status(404).send("Not found") };

        // authorizing user id matching with the user id in the notes
        // if (note.user.toString() !== req.id) {
        //     return res.status(401).send("Not Allowed")
        // }

        await Notes.findByIdAndDelete(req.params.noteid);
        res.json({ Status: "Delete Success", note: note })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "error": "some problem occured..." })
    }
})
module.exports = router