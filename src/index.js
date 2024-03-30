import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppContextProvider from "./context/AppContext"; // Note the default import
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);