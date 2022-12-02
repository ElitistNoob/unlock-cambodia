import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
// Hooks
import React from "react";
import { BrowserRouter } from "react-router-dom";
// Context
import { ContextProvider } from "./components/Context/winWidth";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
