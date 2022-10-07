import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./register";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();