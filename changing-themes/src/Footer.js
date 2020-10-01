import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

import "./footer.css"

export default function Header() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-footer`}>
                    <h4>The Amazing Footer</h4>
                </div>
            )}
        </ThemeContextConsumer>
    )
}