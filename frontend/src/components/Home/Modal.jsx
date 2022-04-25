import { useContext, useRef } from "react"
import modalContext from "../../Context/Modal/modalContext"
import noteContext from "../../Context/Notes/noteContext"
import Form from "./Form"

function Modal(props) {
    const { modal_toggle_reference ,current_click_modal_id,Current_Modal_value,setCurrent_Modal_value} = useContext(modalContext)
    const {FormData} = props;
    const note_functions = useContext(noteContext)
    const {updateNote} = note_functions

    const close_btn = useRef(null)
    function updating_note(){
        updateNote({_id:current_click_modal_id,...FormData}).then(()=>{close_btn.current.click()})
    }
    return (
        <>
            <button type="button" ref={modal_toggle_reference} className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modelId" style={{ display: "none" }}>
            </button>

            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* as form must contain FormData and setFormData */}
                            <Form require_submit_button={false} form={{FormData:Current_Modal_value, setFormData:setCurrent_Modal_value}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={close_btn}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>{updating_note()}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal