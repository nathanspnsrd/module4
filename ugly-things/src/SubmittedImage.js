import React, {useState} from "react"
import { StoreContextConsumer } from "./storeContext"
import SubmissionForm from "./SubmissionForm"

import "./submittedImage.css"

export default function SubmittedImage(props) {
    const [action, setAction] = useState('Edit')

    const toggle = () => {
        setAction(prev => prev === 'Edit' ? 'Save' : 'Edit')
    }

    return (
        <div>
            <StoreContextConsumer>
                {context => (
                    <div>
                        {
                            action === 'Edit'
                            ?
                            <div>
                                <h1>{props.title}</h1>
                                <p>{props.description}</p>
                                <img src={props.url} />


                                <button onClick={event => context.handleDelete(props._id)}>Delete Item</button>
                                <button onClick={toggle}>{action}</button>
                            </div>
                            :
                            <div> 
                                <SubmissionForm type="editForm" info={props} toggle={toggle} />
                            </div>
                            
                        }
                    </div>
                )}
            </StoreContextConsumer>     
        </div>

    )
}