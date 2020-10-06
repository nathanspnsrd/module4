import React from "react"
import { StoreContextConsumer } from "./storeContext"

import "./submissionForm.css"

export default function submissionForm(props) {
    return (
        <StoreContextConsumer>
            {context => (
                <div>
                    <form className="form" onSubmit={context.handleSubmit}>
                        <div>
                            <input
                                value={context.title} 
                                className="inputItem"
                                type="text"
                                name="title"
                                placeholder="Title"
                                onChange={context.handleChange}
                            />
                            <input 
                                value={context.url} 
                                className="inputItem"
                                type="text"
                                name="url"
                                placeholder="Img URL"
                                onChange={context.handleChange}
                            />
                            <input
                                value={context.description} 
                                className="inputItem" 
                                type="text"
                                name="description"
                                placeholder="Description"
                                onChange={context.handleChange}
                            />
                        </div>
                        <button className="button">Submit</button>
                    </form>
                </div>
            )}
        </StoreContextConsumer>
    )
}