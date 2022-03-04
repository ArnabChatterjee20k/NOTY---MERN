import { useContext , useEffect} from 'react';
import noteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';
import Modal from './Modal';
import { GET_API_CALL } from "../API calls/Requests";
export default function Notes() {
    const note_context = useContext(noteContext);
    const {notes,setNotes} = note_context;
    useEffect(() => {
        GET_API_CALL().then((e)=>{setNotes(e)})
    }, []) // rendering it only time .
    
    // delete update read note function are present iniside Icons component as while using component we cant give it onclick event
    return (
        <div className='container row m-3'>
            <Modal/>
            {notes.map((e) => {
                return <NoteItem note_item = {e} key={e._id} _id={e._id}/> 
            })}
        </div>
    )
}
