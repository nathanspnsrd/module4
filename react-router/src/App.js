import React from 'react';
import {Switch, Route, Link} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"


import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
      </nav>
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
      <footer>
        <h2>Thanks for checking us out!</h2>
      </footer>
    </div>
  );
}

export default App;
