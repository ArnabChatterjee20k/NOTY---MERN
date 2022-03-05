import React, { useContext, useState } from 'react'
import formContext from "./formContext";

function FormState(props) {

    const [FormData, setFormData] = useState({ title: "", description: "", tag: "General" })


    const onchange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value }) //overwriting the FormData object's key's values 
        // since the FormData state variable which is an object has no key e.target.name rather it is a function which returns a value. for getting value using key in object the key is always a stringl . so we have used [e.target.name] to convert it into a key.
        // console.log(e.target.name , [e.target.name])
    }
    return (
        <formContext.Provider value={{FormData,setFormData}}>
            {props.children}
        </formContext.Provider>
    )
}

export default FormState
