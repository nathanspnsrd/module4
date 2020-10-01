import React from "react"
import { StoreContextConsumer } from "./storeContext"

import "./submissionForm.css"

export default function submissionForm() {
    return (
        <StoreContextConsumer>
            {context => (
                <div>
                    <form className="form" onChange={context.handleChange}>
                        <div>
                            <input
                                value={context.title} 
                                className="inputItem"
                                type="text"
                                name="Title"
                                placeholder="Title"
                            />
                            <input 
                                value={context.url} 
                                className="inputItem"
                                type="text"
                                name="URL"
                                placeholder="Img URL"
                            />
                            <input
                                value={context.description} 
                                className="inputItem" 
                                type="text"
                                name="description"
                                placeholder="Description"
                            />
                        </div>
                        <button onCick={context.handleSubmit} className="button">Submit</button>
                    </form>
                </div>
            )}
        </StoreContextConsumer>
    )
}