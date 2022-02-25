import React, { useContext } from 'react'
import Notes from './Notes'
export default function Home() {
    return (
        <>
            <div className='my-3 container'>
                <h4 className='my-3'>Add A Note</h4>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Note Title</label>
                    <input type="text"
                        className="form-control fs-6" aria-describedby="helpId" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Enter Your Note</label>
                    <input type="text"
                        className="form-control fs-6" aria-describedby="helpId" placeholder="Note..." />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                </div>
                <h1 className='my-3'>Your Notes</h1>
                <hr />
                <Notes></Notes>
            </div>
        </>
    )
}
