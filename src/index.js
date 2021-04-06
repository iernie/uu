import React from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";
import "./index.scss";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
