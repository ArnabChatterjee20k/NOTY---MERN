import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s = {
        name : "arnab",
        class : "12"
    }
    const [state, setState] = useState(s)
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name":"sdf",
                "class":"dfsdf"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value ={{state,update}}>
            {/* es6 way of creating objects: this is similar to {state:state , updare:update} */}
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;