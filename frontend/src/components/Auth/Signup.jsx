import Log_Form from './Log_Form'
import { useState , useEffect } from 'react'
import Create_fields_object from '../../Utility/Create_Field'
import { CREATE_USER_API_CALL } from '../../API calls/Requests'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';

function Signup() {
    const [name , setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[token , setToken] = useState(localStorage.getItem("noty__auth__token"))
    const history = useHistory()
    useEffect(() => {
        if (token){
            history.push("/")
            toast.warning("Already you are logged in! Please logout to to continue")
        }
    }, [])
    
    const required_fields = [
        new Create_fields_object("Name","enter your name","text",name,setName),
        new Create_fields_object("Email","name@example.com","email",email,setEmail),
        new Create_fields_object("Password","Password","password",password,setPassword)
    ]
    return (
        <Log_Form button_name="Register" alternate_text="Log In" link="/" function_to_be_called_during_submit={CREATE_USER_API_CALL} fields={required_fields}/>
    )
}

export default Signup