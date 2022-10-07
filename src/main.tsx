import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResetGlobalStyle from "./styles/reset";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ResetGlobalStyle />
    <App />
  </React.StrictMode>
);
