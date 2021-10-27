import React, { Component } from "react";
import toDoData from "../toDoData";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      todos: toDoData
    }
  }
  
  render() {
    const toDo = this.state.todos.map(item => <ToDoItem key={item.id} task={item} />)
    return (
      <form>
        <h2>Tasks of the day</h2>
        {toDo}
      </form>
    );
  }
}

export default ToDoList;
