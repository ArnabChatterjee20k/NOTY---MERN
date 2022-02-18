const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
    user:{
        // Just like foreign key
        type : mongoose.Schema.Types.ObjectId, // storing the objectid of the user whose notes to.
        ref : "user" // refering to user collection
    },
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    tag:{
        type : String,
        default : "General"
    },
    date:{
        type : Date,
        default : Date.now // we will not call it we are just passing the function name
    }
})

module.exports = mongoose.model("notes", NotesSchema)