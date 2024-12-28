import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/store";

import { REPO_NAME } from "@constants/repo";

import ThemeProvider from "@context/ThemeProvider";
import App from "@containers/App";

import "@styles/index.css";

const basename = process.env.NODE_ENV === "production" ? `/${REPO_NAME}/` : "/";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
