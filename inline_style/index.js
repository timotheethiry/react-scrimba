import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const firstname = "John";
    const lastname = "Doe";

    const styles = { // JS object not actual CSS rules
        color: "#F00", // pair key:value, valid JS is "#F00", #F00 is not valid JS
        backgroundColor: "#0F0", // camel case syntax cuz' JS not CSS
        fontSize: "24px" // with pixels u can also simply write fontSize: 24, default value is pixels   
    }

    return (
        <h1 style={styles}>Hello {`${firstname} ${lastname}`} !</h1> // style={land of JS {JS object with color: "#000"}}
    );
};

ReactDOM.render( App, document.getElementById("root"));