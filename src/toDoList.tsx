import { useState } from "react";

// Define what props this component expects
interface NewTodoFormProps {
  onSubmit: (title: string) => void;
}

export function NewTodoForm({ onSubmit }: NewTodoFormProps) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (newItem === "") return;

    // Call the function passed down from the parent (App.tsx)
    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
      <button className="btn">Add</button>
    </form>
  );
}