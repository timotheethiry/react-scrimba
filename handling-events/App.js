import React, { Component } from "react";

function handleClick() {
  console.log("I was clicked!");
}

// https://reactjs.org/docs/events.html#supported-events

class App extends Component {
  render() {
    // events are the same as in HTML only in camelCase, we can use arrow or anonymous functions
    return (
      <div>
        <img
          onMouseOver={() => console.log("Hovered!")}
          src="https://www.fillmurray.com/200/100"
        />
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
