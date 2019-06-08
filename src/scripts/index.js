import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.css";

const render = App =>
  ReactDOM.render(
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>,
    document.getElementById("root")
  );

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  const NextApp = require("./components/App").default;
  render(NextApp);
}
