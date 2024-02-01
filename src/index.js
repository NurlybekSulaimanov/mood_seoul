import React from "react";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <HashRouter>
      <GoogleOAuthProvider clientId="650591104699-62if1fsq2gk123vai06hn9gvnfffvnd5.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </HashRouter>
  </Provider>
);
