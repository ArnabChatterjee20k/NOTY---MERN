import React from 'react'
import Log_Form from './Log_Form'

import { AUTH_API_CALL } from '../API calls/Requests'
function Login() {
    return (
        <>
            <Log_Form button_name="Login" alternate_text="Not registered?" link="/signup" function_to_be_called_during_submit={AUTH_API_CALL}/>
        </>
    )
}

export default Login