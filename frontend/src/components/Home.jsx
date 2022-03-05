import Form from "./Form"
import Notes from "./Notes"
export default function Home() {

    return (
        <>
            <div className='my-3 container'>
                <Form require_submit_button={true}/>
                <h1 className='my-3'>Your Notes</h1>
                <hr />
                <Notes></Notes>
            </div>
        </>
    )
}
