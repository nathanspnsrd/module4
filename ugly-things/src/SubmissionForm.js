import React, {useState} from "react"
import { StoreContextConsumer } from "./storeContext"

import "./submissionForm.css"

const SubmissionForm = (props) => {
    const [inputs, setInputs]  = useState({title: props.info?.title || '', description:props.info?.description || '', url:props.info?.url || ''}) 

    const handleChange = event => {
        const {name, value} = event.target
        setInputs(prev => ({...prev, [name]: value }))
    }

    let {title, url, description} = inputs
    return ( 
        <StoreContextConsumer>
            {context => (
            <div>
                <form className={props.type === "submissionForm" ? "form" : "edit-form"} 
                onSubmit={(e) => {
                        e.preventDefault()
                        if(props.type === 'submissionForm'){
                            context.submitThing(inputs)
                        }else {
                            context.editThing(props.info._id, inputs)
                            props.toggle()
                        }
                        setInputs({title: '', description: '', url: ''})
                                }}>
                    <div>
                        <input
                            value={title} 
                            className="inputItem"
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                        />
                        <input 
                            value={url} 
                            className="inputItem"
                            type="text"
                            name="url"
                            placeholder="Img URL"
                            onChange={handleChange}
                        />
                        <input
                            value={description} 
                            className="inputItem" 
                            type="text"
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="button">Submit</button>
                </form>
            </div>
            )}
        </StoreContextConsumer> 
    )
}

export default SubmissionForm