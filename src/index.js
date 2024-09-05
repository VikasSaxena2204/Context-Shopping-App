import React from "react";
import ReactDOM from "react-dom/client"; 
import "./components/styles.css";
import App from "./App.js";
import Context from "./Context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
