import React from "react";
import ReactDOM from "react-dom";

function MyApp() { // convention : use upper camel case for component names
    return ( // best practice : wrap the JSX inside a pair of parenthesis 
        <div>
            <h1>My title</h1>
            <p>My paragraph</p>
        </div> // same rule you can render only a single element 
    )
};

ReactDOM.render(
    <MyApp />, 
    document.getElementById("root")
);