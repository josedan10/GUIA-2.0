import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/Nav";
import Rocket from "./components/Rocket";

ReactDOM.render(
    <Nav />,
    document.getElementById("nav")
);

ReactDOM.render(
    <Rocket />,
    document.getElementById("contact")
);