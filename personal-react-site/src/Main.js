import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "./Home"
import Likes from "./Likes"
import About from "./About"

export default function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Likes">
                    <Likes />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
            </Switch>
        </main>
    )
}