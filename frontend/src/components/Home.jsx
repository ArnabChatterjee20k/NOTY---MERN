import { useContext } from "react";
import Form from "./Form"
import Notes from "./Notes"
import Loading from "./Loading";
import formcontext from "../Context/Forms/formContext";
import noteContext from "../Context/Notes/noteContext";
export default function Home() {
    const form = useContext(formcontext);
    const note_context = useContext(noteContext)
    const {loading} = note_context;
    console.log(loading)
    return (
        <>
            <div className='my-3 container'>
                <Form require_submit_button={true} form={form}/>
                <h1 className='my-3'>Your Notes</h1>
                <hr />
                <Notes></Notes>
                <div className="loader">
                    {
                        loading?(<Loading/>):null
                    }
                </div>
            </div>
        </>
    )
}
