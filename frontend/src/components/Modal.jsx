import { useContext } from "react"
import modalContext from "../Context/Modal/modalContext"
import formcontext from "../Context/Forms/formContext"
import Form from "./Form"
function Modal() {
    const { modal_toggle_reference } = useContext(modalContext)
    const form = useContext(formcontext);
    const {FormData} = form;
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
                            <Form require_submit_button={false} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>{console.log(FormData)}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal