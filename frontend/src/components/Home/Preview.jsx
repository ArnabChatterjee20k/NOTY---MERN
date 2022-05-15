import React, { useEffect } from 'react'
import { useParams , useHistory} from 'react-router-dom'
import noteContext from '../../Context/Notes/noteContext'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
function Preview() {
  const note_context = useContext(noteContext)
  const {notes} = note_context
    const params = useParams()
    const {id} = params
    const history = useHistory()
    function getNote(id){
      // return notes.filter(note=>note._id==`${id}`)
      notes.map((note)=>{
        setTitle(note.title)
        setTag(note.tag)
        setDescription(note.description)
      })
    }

    const [title,setTitle] = useState(null)
    const [tag,setTag] = useState(null)
    const [description,setDescription] = useState(null)

    useEffect(()=>{
      if(notes.length===0){
        // since when we reload the page notes is empty so returning to home page
        history.push("/")
      }
      toast.info("You are viewing the note in preview mode!",{theme:"dark"})
      getNote(id)
    },[])
  return (
    <>
            <div className="container py-5 my-3">
                <div className="note_heading d-flex align-items">
                    <h1 className='note_heading-title'>{title}</h1>
                    <p className="mx-2 badge bg-secondary bg-success border border-2 align-self-start">{tag}</p>
                </div>
                <hr />
                <p>{description}</p>
            </div>
        </>
  )
}

export default Preview