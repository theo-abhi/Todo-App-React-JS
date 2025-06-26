import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      {props.text}
      <button
        className="delete-button"
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
