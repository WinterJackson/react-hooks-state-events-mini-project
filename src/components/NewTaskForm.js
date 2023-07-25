import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [id, setId] = useState(1); // Start with 1 as the initial ID

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { id, text, category }; // Include the ID in the newTask object
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[0]);
    setId((prevId) => prevId + 1); // Increment the ID for the next task
  };

  const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="text-input">Task:</label>
      <input
        id="text-input"
        type="text"
        value={text}
        onChange={handleTextChange}
        required
      />

      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={category}
        onChange={handleCategoryChange}
        required
      >
        {categoryOptions}
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
