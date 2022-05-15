import React , { useState} from 'react'
import PropTypes from 'prop-types'
import { Dustbin_Icon, Pen_Icon, Book_Icon } from './Icons'
import "./NoteItem.css"
import { Link } from 'react-router-dom'
export default function NoteItem(props) {
    const { title, description,tag } = props.note_item
    const {_id} = props
    const [color, setcolor] = useState(["#9ADCFF", "#FFF89A" , "#FFB2A6" , "#FF8AAE"])
    const style = {background:`${color[Math.floor(Math.random()*color.length)]}`}
    return (
        <div className='col-md-3 noteitem'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">{title}</h4>
                        <div className="w-50 d-flex align-items">
                            <Dustbin_Icon _id={_id}/>
                            <Pen_Icon _id={_id} note_details={{...props.note_item}}/>
                            <Link to={`preview/${_id}`} className="link-dark lh-1"> <Book_Icon /> </Link>
                        </div>
                    </div>
                    <p className="card-text">{description}</p>
                    <span className="badge bg-secondary bg-success border border-2">{tag}</span>
                </div>
            </div>
        </div>
    )
}