import React from "react";
import toDoData from "../toDoData";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const toDo = toDoData.map(item => <ToDoItem key={item.id} task={item} />)
  return (
    <form>
      <h2>Tasks of the day</h2>
      {toDo}
    </form>
  );
}

export default ToDoList;
