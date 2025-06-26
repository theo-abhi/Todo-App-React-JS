import { useState } from "react";
import TodoList from "../TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function addItem(event) {
    event.preventDefault();
    if (inputText.trim() === "") return;

    setItems((prevItems) => {
      return [
        ...prevItems,
        { id: Date.now(), text: inputText, completed: false },
      ];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  function toggleComplete(id) {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" onSubmit={addItem}>
        <input
          type="text"
          placeholder="add item..."
          value={inputText}
          onChange={handleChange}
        />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <TodoList
        items={items}
        onDelete={deleteItem}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
