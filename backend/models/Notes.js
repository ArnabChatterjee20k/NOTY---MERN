const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
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