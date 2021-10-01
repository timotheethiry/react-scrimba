import React from "react";
import ReactDOM from "react-dom";

// JSX -- langage from the react lib, allowing to write some JS like HTML to render the HTML 
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root")); // .render(What to render, where to render it)

ReactDOM.render(
    <div>
        <h1>X</h1>
        <p>Y</p>
    </div>, 
z); // multiple elements must be enclosed inside just one element