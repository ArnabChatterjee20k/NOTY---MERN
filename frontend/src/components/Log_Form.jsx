import { useState } from "react"
import "./Log_Form.css"
import Log_Img from "../Img/Log_Img.svg"
import Log_Bg from "../Img/Log_Bg.svg"
import { Link } from 'react-router-dom'

function Log_Form(props) {
    const { button_name, alternate_text, link , function_to_be_called_during_submit} = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="back" style={{ backgroundImage: `url(${Log_Bg})`, backgroundSize: "cover" }}>
            <form className='form-body'>
                <div className='my-4 w-100'>
                    <img src={`${Log_Img}`} alt="" className='hero-img d-block m-auto' />
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="shadow form-control" id="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="shadow form-control" id="password" placeholder="Password" autoComplete="true" suggested="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className='my-4 mx-auto w-100'>
                    <button id="submit_btn" className="shadow btn btn-outline-success w-100" type="button" onClick={()=>{function_to_be_called_during_submit({email,password})}}>{button_name}</button>
                </div>
                <div className="alternate w-100 d-flex">
                    <p className='link p-2'>
                        {alternate_text}
                        <Link to={link} className='mx-3'>Click Here</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Log_Form