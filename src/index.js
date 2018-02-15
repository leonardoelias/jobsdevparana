import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import styled, { injectGlobal } from "styled-components";
import globalStyles from "./shared/styles/globals";

globalStyles();

injectGlobal`
  body {
    overflow-x: hidden;
    background: #F5F7F9;
    font-family: 'PT Sans', sans-serif;
  }
`;

const renderApp = Component => {
  render(
    <Router>
      <Component />
    </Router>,
    document.getElementById("root")
  );
};

renderApp(App);

registerServiceWorker();
