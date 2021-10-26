import React from "react";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
    constructor() { // reminder: the constructor method serves to initialize part of the class
        super() // the super method grabs the properties of the parent class (super class) ie. React.Component
        this.state = {
            whatever: "Hello world!"
        }
    }

    render() {

        // props are immutable so we can't do something like this.props = blablabla
        // hence we need state to maintain data and update props to pass to the components

        return (
            <div>
               <div>{this.state.whatever}</div>
                <ChildComponent answer={this.state.answer} /> 
            </div>
        );
    }
}

export default App;