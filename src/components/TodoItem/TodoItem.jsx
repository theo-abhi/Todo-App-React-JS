import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li
      className={`todo-item ${props.completed ? "completed" : ""}`} // Conditionally apply 'completed' class
      onClick={() => {
        props.onToggleComplete(props.id); // Call toggleComplete function on click
      }}
      key={props.id}
    >
      <input type="checkbox" checked={props.completed} readOnly />
      <span className="todo-text">{props.text}</span>
      <button
        className="delete-button" // Add a class name to the button
        onClick={(event) => {
          event.preventDefault(); // Prevents the li's onClick from firing
          props.onDelete(props.id); // Call deleteItem function on click
        }}
      >
        DEL
      </button>
    </li>
  );
}

export default TodoItem;
