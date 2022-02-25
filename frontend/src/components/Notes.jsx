import { useContext } from 'react';
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
export default function Notes() {
    const note_context = useContext(noteContext);
    const {notes,setNotes} = note_context;
    return (
        <div className='container row m-3'>
            {notes.map((e,i) => {
                return <NoteItem note_item = {e} key={i}/> 
            })}
        </div>
    )
}
