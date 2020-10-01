import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

import "./button.css"

export default function Button() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className="button">
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Toggle Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}