import { useContext } from "react";
import Form from "./Form"
import Notes from "./Notes"
import formcontext from "../Context/Forms/formContext";

export default function Home() {
    const form = useContext(formcontext);
    return (
        <>
            <div className='my-3 container'>
                <Form require_submit_button={true} form={form}/>
                <h1 className='my-3'>Your Notes</h1>
                <hr />
                <Notes></Notes>
            </div>
        </>
    )
}
