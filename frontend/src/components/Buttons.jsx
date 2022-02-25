import React from 'react'
import "./Buttons.css"
import { Dustbin_Icon,Pen_Icon } from './Icons'
export const DeleteButton = () => {
    return (
        <button type="button" className="btn btn-danger btn-sm m-2">
            <Dustbin_Icon />
        </button>
    )
}

export const UpdateButton = () => {
    return (
        <button type="button" className="btn btn-warning btn-sm m-2">
            <Pen_Icon />
        </button>
    )
}