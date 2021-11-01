import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      unreadMessages: ["a", "b"],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false }); // set isLoading to false 1.5sec after the 1st rendering
    }, 1500);
  }

  render() {
    // best practice : the conditional rendering should takes place where the corresponding state is updated
    return (
      // the div is not strictly necessary in this case
      // but useful to render other elements, like a header, and have a condition just on the <h1>

      // the ternary operator is useful when we want to render either one of two things
      // when we want to render something or nothing at all, like when 0 unread message, we use the && operator
      <div>
        {this.isLoading ? <h1>Loading...</h1> : <ChildComponent />}

        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages !</h2>
        )}
      </div> // parentheses introduced by prettier 🤷🏼‍♂️
    );
  }
}
