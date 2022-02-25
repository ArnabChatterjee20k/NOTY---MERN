import React from 'react'
import { DeleteButton, UpdateButton } from './Buttons'
import { Dustbin_Icon, Pen_Icon, Book_Icon } from './Icons'
export default function NoteItem(props) {
    const { title, description } = props.note_item
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">{title}</h4>
                        <Dustbin_Icon />
                        <Pen_Icon />
                        <Book_Icon />
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}
