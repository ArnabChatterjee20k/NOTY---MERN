import { useContext } from 'react';
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
export default function Notes() {
    const note_context = useContext(noteContext);
    const {notes} = note_context;
    return (
        <div className='container row m-3'>
            {notes.map((e) => {
                return <NoteItem note_item = {e} key={e._id} /> 
            })}
        </div>
    )
}
