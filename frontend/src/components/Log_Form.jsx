import { useState } from "react"
import "./Log_Form.css"
import Log_Img from "../Img/Log_Img.svg"
import Log_Bg from "../Img/Log_Bg.svg"
import { Link } from 'react-router-dom'

function Log_Form(props) {
    const { button_name, alternate_text, link, function_to_be_called_during_submit, fields } = props
    let field_data={}
    return (
        <div className="back" style={{ backgroundImage: `url(${Log_Bg})`, backgroundSize: "cover" }}>
            <form className='form-body'>
                <div className='my-4 w-100'>
                    <img src={`${Log_Img}`} alt="" className='hero-img d-block m-auto' />
                </div>
                {
                    fields.map((field) => {
                        field_data = {...field_data , [field.field_name]:field.state_variable}
                        return(
                        <div className="form-floating mb-3" key={field.field_name}>
                            <input type={field.type} className="shadow form-control" id={field.type} placeholder={field.placeholder} value={field.state_variable} onChange={(e) => field.setter_function(e.target.value)} />
                            <label htmlFor={field.type}>{field.field_name}</label>
                        </div>
                    )})
                }
                <div className='my-4 mx-auto w-100'>
                    <button id="submit_btn" className="shadow btn btn-outline-success w-100" type="button" onClick={()=>{function_to_be_called_during_submit({...field_data})}}>{button_name}</button>
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