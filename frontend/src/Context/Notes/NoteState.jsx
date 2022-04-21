import noteContext from "./noteContext";
import { useState } from "react";
import { POST_API_CALL , DELETE_API_CALL , PUT_API_CALL} from "../../API calls/Requests";

const NoteState = (props) => {
    const notes_initital = []
    const [notes, setNotes] = useState(notes_initital)
    const [loading, setLoading] = useState(true)
    
    
    /**
     * Rendering note on first load of website is written in Notes using useEffect hook.
     */

    // CRUD operations

    // Add a Note
    const addNote = async({title , description , tag})=>{ // using object destructuring to get the keys from the argument
        // TODO: API Call
        const note =  {

            
            title : title,
            description : description , 
            tag : tag
        }
        POST_API_CALL(note).then((note)=>{
            setNotes(notes.concat(note)) // since .concat returns an array so we can easily use map on it.
        }).catch((error)=>alert(error))

        return "Done"
    }
    
    // Delete a Note
    const deleteNote = (id)=>{
        DELETE_API_CALL(id).then(()=>{
            const newNotes = notes.filter(note=>note._id!==id)
            setNotes(newNotes)
        }).catch((error)=>{alert(error)})
    }
    
    // Edit a Note
    const updateNote = async ({_id , title , description , tag })=>{
        // Api call
        const url = "api/notes/updatenote/"+_id
        const body ={title,description,tag}
        PUT_API_CALL(_id,body).then(()=>{setNotes (notes.map(
            (note)=> {
                if(note._id===_id){
                    // Api call 
                    const header = 
                    // editing the note
                    note.title = title
                    note.description = description
                    note.tag = tag
                }
                return note
            }
        ))}
        )
        return "updated"
    }

    return (
        <noteContext.Provider value={{notes, setNotes ,addNote , deleteNote , updateNote , loading , setLoading}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;