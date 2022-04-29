import PropTypes from 'prop-types';
import "./NoteItem.css"
function Preview_Notes(props) {
    const { title, description, tag } = props.note_item
    const { _id } = props
    return (
        <>
            <div className="container py-5 my-3">
                <div className="note_heading d-flex align-items">
                    <h1 className='note_heading-title'>{title}</h1>
                    <p className="mx-2 badge bg-secondary bg-success border border-2">{tag}</p>
                </div>
                <hr />
                <p>{description}</p>
            </div>
        </>
    )
}
Preview_Notes.defaultProps = {
    note_item: { title: "Note title", description: "Desp", tag: "Tag" },
    _id: "Id"
}

export default Preview_Notes