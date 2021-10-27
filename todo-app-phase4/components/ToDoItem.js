import React from "react";

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" id="phase4" name="phase4" checked={props.task.completed}/>
            <label for="phase4">{props.task.todo}</label>
        </div>
    )
};

export default ToDoItem;