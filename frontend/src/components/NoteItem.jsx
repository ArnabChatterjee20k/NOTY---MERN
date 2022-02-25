import React from 'react'
export default function NoteItem(props) {
    const {title , description} = props.note_item
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}
