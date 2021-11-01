import React, { Component } from "react";

class App extends Component {
    // initialize the default state and configuration of the component
    constructor() {}

    // probably won't need it as it may cause bugs and there are better ways to update the state
    static getDerivedStateFromProps(props, state) {
        // return the updated state based on the props
        // rare use case : the component receives props from its parent and need the set its own state
    } 

    // called between the last render() call and the updated component actually being propagated through the DOM
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // create a backup of the way things are (DOM) right before integrating the results of the last render
    }
    
    // component is rendered for the first time
    componentDidMount() {
        // GET data from an external source needed to display correctly, e.g. fetch data from some API
        // manipulate the DOM
    }


    /* Do not use, serves to check props received from a parent component or after a re-rendering
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props.something) {
            // do something important, i.e update the props
        }
    }*/

    // decide whether to re-render the component, returns true by default, which can slow down the app 
    shouldComponentUpdate(nextProps, nextState) {
        // return true to update the component
        // return false to not update
        /* e.g 
        return this.props.something !== nextProps.something || this.state.something !== nextState.something */
    }

    // basically the same as componentWillReceiveProps()
    //UNSAFE_componentWillUpdate() {}

    // comporent is re-rendered, we can react to the changes integrated to the DOM
    componentDidUpdate(prevProps, prevState) {
        // when using setState here, we need an if statement to prevent infinite loop
        if (prevState.something !== this.state.something) {
            // do something
            // e.g this.setState({color: newColor})
        }
    }

    // component is not need anymore and may be removed from the screen
    componentWillUnmount() {
        // cleanup the code before the component disapears from the screen, e.g. remove event listener
    }

    // decides how a component must be displayed
    render() {
        return (
            <div></div>
        );
    }
}

export default App;