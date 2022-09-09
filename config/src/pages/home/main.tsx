import React from "react";
import ReactDOM from "react-dom/client";

import { K60x5 } from "./App";

import "../../../public/styles/global.css";

ReactDOM.createRoot(document.getElementById('home') as HTMLElement).render(
  <React.StrictMode>
    <K60x5 />
  </React.StrictMode>
);
