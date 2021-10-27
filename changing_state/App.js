import React, { Component } from "react";

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this); // to use setState we need to bind the function to the class this
    }

    handleClick() {
        this.setState(prev => { // if we need the previous state, then we pass a function than return the new object
            return {
                count: prev.count + 1
            }
        })
    }

    newState() {
        // we don't mutate the existing state directly like this.state.count++, Which would cause several issues
        this.setState({key: value}) // if we don't need the previous state, we just have to pass an object literal
    }

    render() {
        // when using a method written inside a class, we need to call it from the class this
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
