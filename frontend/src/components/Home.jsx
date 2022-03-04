import Form from "./Form"
import Notes from "./Notes"
export default function Home() {

    return (
        <>
            <div className='my-3 container'>
                <Form/>
                <hr />
                <Notes></Notes>
            </div>
        </>
    )
}
