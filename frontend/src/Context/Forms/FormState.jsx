import React, { useContext, useState } from 'react'
import formContext from "./formContext";

function FormState(props) {
    const initial_form_state = { title: "", description: "", tag: "General" } // can be used in other contexts to set form data to initial state
    const [FormData, setFormData] = useState(initial_form_state)


    const onchange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value }) //overwriting the FormData object's key's values 
        // since the FormData state variable which is an object has no key e.target.name rather it is a function which returns a value. for getting value using key in object the key is always a stringl . so we have used [e.target.name] to convert it into a key.
        // console.log(e.target.name , [e.target.name])
    }

    const set_initial_form_state=()=>{
        setFormData(initial_form_state)
    }
    return (
        <formContext.Provider value={{FormData,setFormData,initial_form_state,set_initial_form_state}}>
            {props.children}
        </formContext.Provider>
    )
}

export default FormState
