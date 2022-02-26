import { useContext } from 'react';
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
export default function Notes() {
    const note_context = useContext(noteContext);
    const {notes} = note_context;
    // delete update read note function are present iniside Icons component as while using component we cant give it onclick event
    return (
        <div className='container row m-3'>
            {notes.map((e) => {
                return <NoteItem note_item = {e} key={e._id} _id={e._id}/> 
            })}
        </div>
    )
}
