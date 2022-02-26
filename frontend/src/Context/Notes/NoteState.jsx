import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notes_initital = [
        {
            "_id": "620fbe9c3c45285d1da9e93a",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-18T15:43:24.388Z",
            "__v": 0
        },
        {
            "_id": "62147fccc373a0db370d7128",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-22T06:16:44.016Z",
            "__v": 0
        },
        {
            "_id": "62147fccc373a0db370d712a",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-22T06:16:44.663Z",
            "__v": 0
        },
        {
            "_id": "62147fcdc373a0db370d712c",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-22T06:16:45.166Z",
            "__v": 0
        },
        {
            "_id": "62147fcdc373a0db370d712e",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-22T06:16:45.598Z",
            "__v": 0
        },
        {
            "_id": "62147fcdc373a0db370d7130",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-22T06:16:45.784Z",
            "__v": 0
        },
        {
            "_id": "62147fcdc373a0db370d7132",
            "user": "620fbd31c8638bf408a3985c",
            "title": "arnab",
            "description": "my first notes",
            "tag": "General",
            "date": "2022-02-22T06:16:45.928Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notes_initital)

    // CRUD operations

    // Add a Note
    const addNote = ({title , description , tag})=>{ // using object destructuring to get the keys from the argument
        // TODO: API Call
        const note =  {
            title : title,
            description : description , 
            tag : tag
        }
        setNotes(notes.concat(note)) // since .concat returns an array so we can easily use map on it.
        console.log(note)
    }
    
    // Delete a Note
    const deleteNote = ()=>{
        
    }
    
    // Edit a Note
    const updateNote = ()=>{
        
    }

    return (
        <noteContext.Provider value={{notes, addNote , deleteNote , updateNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;