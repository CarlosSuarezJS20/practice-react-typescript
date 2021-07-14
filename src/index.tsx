import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/UI/scrollToTop/ScrollToTop";

// @ts-ignore
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-KKB455T",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
