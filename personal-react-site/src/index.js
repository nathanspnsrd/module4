import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"
import {CardContextProvider} from "./cardContext"

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <CardContextProvider>
      <Router>
        <App />
      </Router>
    </CardContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)