import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      {" "}
      {/* Add a class name to the list item */}
      {props.text}
      <button
        className="delete-button" // Add a class name to the button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        DEL
      </button>
    </li>
  );
}

export default TodoItem;
