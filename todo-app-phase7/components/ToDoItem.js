import React from "react";

function ToDoItem(props) {
    // we need a ternary instead of a && because className accepts non-boolean values
    const completedStyle = props.task.completed ? "itemCompleted" : null
    return (
        <div className="todo-item">
            <input type="checkbox" id="phase5" name="phase5" 
                onChange={() => props.handleChange(props.task.completed)} 
                checked={props.task.completed}
            />
            <label for="phase5" className={completedStyle}>{props.task.todo}</label>
        </div>
    )
};

export default ToDoItem;