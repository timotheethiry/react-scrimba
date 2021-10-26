import React from "react";

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" id="phase3" name="phase3" checked={props.task.completed}/>
            <label for="phase3">{props.task.todo}</label>
        </div>
    )
};

export default ToDoItem;