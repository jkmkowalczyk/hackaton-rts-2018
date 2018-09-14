import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(<Navbar/>, document.getElementById("root"));
registerServiceWorker();
