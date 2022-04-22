import { useContext, useEffect } from "react";
import Form from "./Form"
import Notes from "./Notes"
import Loading from "./Loading";
import formcontext from "../Context/Forms/formContext";
import noteContext from "../Context/Notes/noteContext";
export default function Home() {
    const form = useContext(formcontext);
    const note_context = useContext(noteContext)
    const { loading } = note_context;
    const note_title = document.querySelector(".note_heading");
    useEffect(() => {
        /** After the note_title gets mounted then this will run. 
         * If statement is used as if notetitle is null means if it is not mounted then this will give an error.
         * Also the dependency array is set upon it as when the value will change quickly this will run.
         * Atfirst when it was null it would run but not scross 2nd time when mounted it will start scrolling */ 
        
        // console.log("running")
        if (note_title) {
            const pos = note_title.getBoundingClientRect().top
            // console.log(pos)
            window.scroll({ top: pos, behavior: "smooth" })
        }
    }, [note_title])
    return (
        <>
            <div className='my-3 container'>
                <Form require_submit_button={true} form={form} />
                <h1 className='my-3 note_heading'>Your Notes</h1>
                <hr />
                <Notes />
                {loading && <div className="loader">
                    <Loading />
                </div>}
            </div>
        </>
    )
}
