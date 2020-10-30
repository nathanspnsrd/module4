import React from "react"

import NavBar from "./Nav"
import Main from "./Main"

import './App.css'

export default function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <footer>
        <h2>Thank you to ProPublica for providing this list of nonprofit organizations.</h2>
      </footer>
    </div>
  );
}