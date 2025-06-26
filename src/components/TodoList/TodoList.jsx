import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.items.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed} // Pass completed status
            onToggleComplete={props.onToggleComplete} // Pass toggle function
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
