import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const firstname = "John"; // JS
    const lastname = "Doe";

    return (
        <h1>Hello {`${firstname} ${lastname}`} !</h1> // <> JSX { JS } JSX </>
    );
};

ReactDOM.render( App, document.getElementById("root"));