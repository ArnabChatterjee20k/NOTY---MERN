import modalContext from "./modalContext"
import { useRef ,useState,useContext} from "react"
import formcontext from "../Forms/formContext"

function ModalState(props) {

    // making modal states
    const {initial_form_state} = useContext(formcontext) 
    const [Current_Modal_value, setCurrent_Modal_value] = useState({...initial_form_state}) // setting formdata to modal

    // setting a way to pass id of the current note to the modal
    const modal_toggle_reference = useRef()

    const [current_click_modal_id,setCurrent_click_modal_id] = useState(null)
    
    function modal_open(_id){
        setCurrent_click_modal_id(_id)
        // console.log(Current_Modal_value)
        modal_toggle_reference.current.click()
    }

    return (
        <modalContext.Provider value={{modal_toggle_reference,modal_open,current_click_modal_id,setCurrent_click_modal_id,Current_Modal_value,setCurrent_Modal_value}}>
            {props.children}
        </modalContext.Provider>
    )
}

export default ModalState