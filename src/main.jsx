//* libraries
import React from "react";
import ReactDOM from "react-dom/client";
//* App
import { GifExpertApp } from "./GifExpertApp";
//* styles
import "./styles.css";

//------------------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
