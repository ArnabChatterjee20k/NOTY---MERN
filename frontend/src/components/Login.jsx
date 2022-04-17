import {useState} from 'react'
import Log_Form from './Log_Form'

import { AUTH_API_CALL } from '../API calls/Requests'
import Create_fields_object from '../Utility/Create_Field';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const required_fields = [
        new Create_fields_object("Email","name@example.com","text",email,setEmail),
        new Create_fields_object("Password","Password","password",password,setPassword)
    ]
    return (
        <>
            <Log_Form button_name="Login" alternate_text="Not registered?" link="/signup" function_to_be_called_during_submit={AUTH_API_CALL} fields={required_fields}/>
        </>
    )
}

export default Login