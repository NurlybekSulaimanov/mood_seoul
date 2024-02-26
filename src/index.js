import React from "react";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
