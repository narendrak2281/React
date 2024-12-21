import React from "react";

const  TodoItem = (parameter) =>
{
    return (
        <li className="todo-item">
            <span>
                <input type="checkbox" />
                <span className="todo-item-text">{parameter.text}</span>
            </span>
            <p>...</p>
        </li>
    );
};

export default TodoItem;