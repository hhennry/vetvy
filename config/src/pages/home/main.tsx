import React from "react";
import ReactDOM from "react-dom/client";

import "../../../public/styles/global.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById('home') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
