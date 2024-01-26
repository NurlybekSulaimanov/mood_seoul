import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GoogleOAuthProvider clientId="650591104699-62if1fsq2gk123vai06hn9gvnfffvnd5.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
