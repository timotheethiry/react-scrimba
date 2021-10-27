import React from "react";

function ToDoItem(props) {
    // can't actually use the event for now, but thanks to the handler React doesn't send a warning anymore
    return (
        <div className="todo-item">
            <input type="checkbox" id="phase5" name="phase5" 
                onChange={() => console.log("ToDo item changed!")} 
                checked={props.task.completed}
            />
            <label for="phase5">{props.task.todo}</label>
        </div>
    )
};

export default ToDoItem;