import React, { Component } from "react";

class App extends Component {
    constructor() {
        super(),
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // best practice: accessing the target properties through object destructuring instead of directly, avoid bugs 
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        // using the value attribute, we get a controlled component relying on the React state as the single SoT
        return (
            <form>
                <input 
                    type="text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default App;
