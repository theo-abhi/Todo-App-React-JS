import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id} // Use item.id as the key
          id={item.id} // Pass id
          text={item.text} // Pass text
          completed={item.completed} // Pass completed status
          onDelete={props.onDelete} // Pass onDelete function
          onToggleComplete={props.onToggleComplete} // Pass onToggleComplete function
        />
      ))}
    </ul>
  );
}

export default TodoList;
