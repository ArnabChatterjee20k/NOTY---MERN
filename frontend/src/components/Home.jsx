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
                <button id="scroll-to-top" class="btn btn-primary m-2 position-sticky bottom-0 float-end" role="button" onClick={()=>{window.scrollTo(0,0)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </button>
            </div>
        </>
    )
}
