import { useState } from "react";
function ListManager() {
  const [items, setItems] = useState([]); // State to hold list items
  const [inputValue, setInputValue] = useState(""); // State for input field

  const handleAddItem = () => {
    if (inputValue.trim() !== "") { // Prevent empty items
      setItems([...items, inputValue]); // Add new item
      setInputValue(""); // Clear input field
    }
  };

  return (
    <div className="container">
      <h2>Dynamic List Manager</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;

