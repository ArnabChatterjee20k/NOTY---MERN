import modalContext from "./modalContext"
import { useRef ,useState} from "react"

function ModalState(props) {
    const modal_toggle_reference = useRef()

    const [current_click_modal_id,setCurrent_click_modal_id] = useState(null)

    function modal_open(_id){
        setCurrent_click_modal_id(_id)
        modal_toggle_reference.current.click()
    }

    return (
        <modalContext.Provider value={{modal_toggle_reference,modal_open,current_click_modal_id,setCurrent_click_modal_id}}>
            {props.children}
        </modalContext.Provider>
    )
}

export default ModalState