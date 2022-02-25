import React from 'react'
import PropTypes from 'prop-types'
import { Dustbin_Icon, Pen_Icon, Book_Icon } from './Icons'
import "./NoteItem.css"
function NoteItem(props) {
    const { title, description } = props.note_item
    const color = props.color 
    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{background:`${color[Math.floor(Math.random()*color.length)]}`}}>
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

NoteItem.prototype ={
    color : PropTypes.array
}
NoteItem.defaultProps = {
    color : ["#9ADCFF", "#FFF89A" , "#FFB2A6" , "#FF8AAE"]
}
export default NoteItem;
