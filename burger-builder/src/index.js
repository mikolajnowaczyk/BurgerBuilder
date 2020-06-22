/*eslint no-undef: "error"*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* eslint-disable react/prop-types */
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
const app = (
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
/* eslint-disable react/prop-types */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
