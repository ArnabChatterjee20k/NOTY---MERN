import { useContext , useEffect} from 'react';
import noteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';
import Modal from './Modal';
import { GET_API_CALL } from "../API calls/Requests";
import modalContext from '../Context/Modal/modalContext';

export default function Notes() {
    const note_context = useContext(noteContext);
    const {notes,setNotes,setLoading} = note_context;
    const {Current_Modal_value,setCurrent_Modal_value} = useContext(modalContext);
    useEffect(() => {
        setLoading(true)
        GET_API_CALL().then((e)=>{
            setNotes(e)
            setLoading(false)
        })
    }, []) // rendering it only time .
    
    // delete update read note function are present iniside Icons component as while using component we cant give it onclick event
    return (
        <div className='container row m-3'>
            <Modal FormData={Current_Modal_value}/>
            {/* Displaying this msg if no notes present */}
            {notes.length===0 && <h1>No Notes to display</h1>}
            {notes.map((e) => {
                return <NoteItem note_item = {e} key={e._id} _id={e._id}/> 
            })}
        </div>
    )
}
