import React from "react"

import Button from "./Button"
import { ThemeContextConsumer } from "./ThemeContext"

import "./main.css"

export default function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-main`}>
                    <h2>Click the button to toggle the Light Theme</h2>
                    <Button />
                </div>
            )}
        </ThemeContextConsumer>
    )
}