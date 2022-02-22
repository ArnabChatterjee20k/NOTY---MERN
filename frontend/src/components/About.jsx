import React ,{useContext, useEffect} from 'react'
import noteContext from '../Context/Notes/noteContext'

export default function About() {
  const a = useContext(noteContext)
  return (
    <div>About </div>
  )
}
