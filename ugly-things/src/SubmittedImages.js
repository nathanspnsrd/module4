import React from "react"
import { StoreContextConsumer } from "./storeContext"

import "./submittedImages.css"

export default function SubmittedImages() {
    return (
        <StoreContextConsumer>
            {context => (
                <div>
                    <h1>{context.title}</h1>
                    <p>{context.description}</p>
                    <img url={context.url}></img>
                </div>
            )}
        </StoreContextConsumer>
    )
}