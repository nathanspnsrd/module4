import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

export default function Main () {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Services">
                    <Services />
                </Route>
            </Switch>
        </main>
    )
}