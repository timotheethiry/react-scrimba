import React from "react";

function ToDoItem(props) {
    // onChange doesn't receive a prop but an event, so we use an arrow func to return a prop which calls the method
    return (
        <div className="todo-item">
            <input type="checkbox" id="phase5" name="phase5" 
                onChange={() => props.handleChange(props.task.completed)} 
                checked={props.task.completed}
            />
            <label for="phase5">{props.task.todo}</label>
        </div>
    )
};

export default ToDoItem;