import React from "react"
import { StoreContextConsumer } from "./storeContext"

import "./submittedImage.css"

export default function SubmittedImage(props) {

    

    return (
        <div>
            <StoreContextConsumer>
                {context => (
                    <div>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <img src={props.url}/>

                        <button onClick={event => context.handleDelete(props._id)}>Delete Item</button>
                        <button onClick={event => context.handleEdit(props._id)}>Edit</button>
                    </div>
                )}
            </StoreContextConsumer>     
        </div>

    )
}