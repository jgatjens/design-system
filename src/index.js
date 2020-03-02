import React from "react";
import ReactDOM from "react-dom";
import { Copyright, Footer } from "./lib";

const App = () => (
  <div>
    <Footer />
    <Copyright />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
