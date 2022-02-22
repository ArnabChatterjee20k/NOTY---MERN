import React ,{useContext, useEffect} from 'react'
import noteContext from '../Context/Notes/noteContext'

export default function About() {
  const a = useContext(noteContext)
  // an array of object contains info about different components.
  return (
    [{ name: "Home", link: "/", component: <Home/> }, { name: "About", link: "/about", component: <About/> }] // it will be used as props in navbar to make set navitems and links
  )
}
