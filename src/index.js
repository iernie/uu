import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  import("@axe-core/react").then((axe) => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(<App />, document.getElementById("root"));
  });
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
