import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Promise polyfill for older browsers
import 'promise-polyfill/src/polyfill';

// Fetch polyfill for older browsers
import 'whatwg-fetch';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
