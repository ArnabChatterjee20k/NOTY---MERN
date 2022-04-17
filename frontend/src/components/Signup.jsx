import React from 'react'
import Log_Form from './Log_Form'
import { useState } from 'react'


function name_input() {
    return (
        <div className="form-floating mb-3">
            <input type="text" className="shadow form-control" id="name" placeholder="Name" />
            <label htmlFor="name">Name</label>
        </div>
    )
}

function Signup() {
    const [name , usename] = useState("")
    return (
        <Log_Form button_name="Register" alternate_text="Log In" link="/"  Extra_component ={name_input}  extra_data={name}/>
    )
}

export default Signup