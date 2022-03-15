import React from 'react'
import Log_Form from './Log_Form'
function Login() {
    return (
        <>
            <Log_Form button_name="Login" alternate_text="Not registered?" link="/signup"/>
        </>
    )
}

export default Login