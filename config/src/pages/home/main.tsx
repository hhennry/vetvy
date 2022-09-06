import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "../../../public/styles/global.css";

ReactDOM.createRoot(document.getElementById('home') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
