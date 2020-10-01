import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ThemeContextProvider} from "./ThemeContext"

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
