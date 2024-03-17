import React from "react";
import Item from "./components/item.jsx";
import "./App.css";
import { useState } from "react";
import todoLogo from "./assets/Microsoft_To-Do_icon.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    if (inputValue === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };
  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <div>
        <img src={todoLogo} className="logo" alt="todo logo" />
        <h1>To-Do List</h1>

        <input
          onKeyDown={handleKeyDown}
          placeholder="Enter your to-do item here..."
          value={inputValue}
          onChange={handleInputChange}
          className="custom-input"
          type="text"
        />
        <br />
        <br />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>

      {items.map((item, index) => (
        <Item onRemove={() => handleRemove(index)} key={index} text={item} />
      ))}
      <p className="read-the-docs">
        I watch a lot of astronaut movies....Mostly Star Wars. And even Han and
        Chewie use a checklist. ~ Jon Stewart
      </p>
    </>
  );
}

export default App;
