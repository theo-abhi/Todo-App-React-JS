import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.items.map((todoItem) => (
          <TodoItem key={todoItem.id} text={todoItem.text} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
