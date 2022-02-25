import React from 'react'
import "./Buttons.css"

export const DeleteButton = () => {
    return (
        <button type="button" className="btn btn-danger btn-sm m-2">Delete</button>
    )
}

export const UpdateButton = () =>{
    return (
        <button type="button" class="btn btn-warning btn-sm m-2">Update</button>
    )
}