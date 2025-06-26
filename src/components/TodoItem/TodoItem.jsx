import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li
      className={`todo-item ${props.completed ? "completed" : ""}`} // Conditionally apply 'completed' class
      onClick={() => {
        props.onToggleComplete(props.id); // Call toggle function on click
      }}
    >
      <span className="todo-text">{props.text}</span>
      <button
        className="delete-button" // Add a class name to the button
        onClick={(e) => {
          e.stopPropagation(); // Prevents the li's onClick from firing
          props.onDelete(props.id);
        }}
      >
        DEL
      </button>
    </li>
  );
}

export default TodoItem;
