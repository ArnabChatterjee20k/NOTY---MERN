import React, { useContext , useState} from 'react'
import Notes from './Notes'
import noteContext from '../Context/Notes/noteContext'
export default function Home() {
    const note_context = useContext(noteContext);
    const {notes,addNote} = note_context;

    const [FormData, setFormData] = useState({title:"" , description:"" , tag:"General"})

    const handleClick = ()=>{
        addNote(FormData)
    }

    const onchange = (e)=>{
        setFormData({...FormData, [e.target.name]:e.target.value}) //overwriting the FormData object's key's values 
        // since the FormData state variable which is an object has no key e.target.name rather it is a function which returns a value. for getting value using key in object the key is always a stringl . so we have used [e.target.name] to convert it into a key.
        // console.log(e.target.name , [e.target.name])
    }

    return (
        <>
            <div className='my-3 container'>
                <h4 className='my-3'>Add A Note</h4>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="text"
                        className="form-control fs-6" aria-describedby="helpId" placeholder="Title" id="title" name="title" onChange={onchange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter Your Note</label>
                    <input type="text"
                        className="form-control fs-6" aria-describedby="helpId" placeholder="Note..." id="description" name="description" onChange={onchange}/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text"
                        className="form-control fs-6" aria-describedby="helpId" placeholder="Tag..." id="tag" name="tag" onChange={onchange}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary btn-sm" onClick={handleClick}>Submit</button>
                </div>
                <h1 className='my-3'>Your Notes</h1>
                <hr />
                <Notes></Notes>
            </div>
        </>
    )
}
