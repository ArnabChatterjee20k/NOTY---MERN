import modalContext from "./modalContext"
import { useRef } from "react"

function ModalState(props) {
    const modal_toggle_reference = useRef()

    function modal_open(){
        modal_toggle_reference.current.click()
    }

    return (
        <modalContext.Provider value={{modal_toggle_reference,modal_open}}>
            {props.children}
        </modalContext.Provider>
    )
}

export default ModalState