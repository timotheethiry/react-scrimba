import React from "react";

// functional components are limited, can't use lifecycle nor states, unlike class-based components 

/*function App() {
    return (
        <div>{props}</div>
    )
};*/

class App extends React.Component { // setting a prototype with React.Components

    // we can write our own class methods here
    yourMethod() {}

    render() {

        // and we can do stuff here
        const whatever = new Date();
        const useClassMethod = this.yourMethod;

        // there is a syntax change regarding props
        return (
            <div>{this.props}</div>
        );
    }
}

export default App;