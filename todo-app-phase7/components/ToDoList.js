import React, { Component } from "react";
import toDoData from "../toDoData";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: toDoData
    };
    this.handleChange = this.handleChange.bind(this); // we need to bind a class func to the this of the class
  }

  handleChange(id) {
    // we need the previous state, so we pass it to setState
    this.setState(prevState => {
      // we store the new data in a separate variable, which we will assign to the returned object
      // to identify the clicked item we need to search through the all array of data
      const newState = prevState.todos.map(item => {
        // we switch the completed property of the clicked item and return the other items as they are
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });

      return {
        todos: newState
      };
    });
  }
  
  render() {
    const toDo = this.state.todos.map(item => <ToDoItem key={item.id} task={item} handleChange={this.handleChange} />);
    
    return (
      <form>
        <h2>Tasks of the day</h2>
        {toDo}
      </form>
    );
  }
}

export default ToDoList;
