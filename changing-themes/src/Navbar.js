import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

import "./navBar.css"

export default function Navbar() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-navBar`}>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            )}
        </ThemeContextConsumer>
    )
}