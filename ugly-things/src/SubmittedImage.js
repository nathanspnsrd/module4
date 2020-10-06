import React from "react"
import { StoreContextConsumer } from "./storeContext"

import "./submittedImage.css"

export default function SubmittedImage(props) {
    return (
        <StoreContextConsumer>
            {context => (
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <img src={props.url}/>
                </div>
            )}
        </StoreContextConsumer>
    )
}