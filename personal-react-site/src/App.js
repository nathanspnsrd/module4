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
        <h2>spnsrd is an app which helps you to better support small businesses.</h2>
      </footer>
    </div>
  );
}