import { useState } from "react";
import TodoList from "../TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    if (inputText.trim() === "") return;

    setItems((prevItems) => {
      return [...prevItems, { id: Date.now(), text: inputText }];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
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
      <TodoList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
