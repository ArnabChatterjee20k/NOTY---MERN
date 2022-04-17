import Log_Form from './Log_Form'
import { useState } from 'react'

import Create_fields_object from '../Utility/Create_Field'

function Signup() {
    const [name , setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const required_fields = [
        new Create_fields_object("Name","enter your name","text",name,setName),
        new Create_fields_object("Email","name@example.com","text",email,setEmail),
        new Create_fields_object("Password","Password","password",password,setPassword)
    ]
    return (
        <>
        <Log_Form button_name="Register" alternate_text="Log In" link="/" function_to_be_called_during_submit={null} fields={required_fields}/>
        </>
    )
}

export default Signup