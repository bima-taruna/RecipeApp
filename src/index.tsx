import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>
);
