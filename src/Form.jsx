import { useState } from "react";

export default function Form() {
  // Correct useState initialization
  const [fullName, setFullName] = useState("narayan");

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <form>
        <label htmlFor="username">FullName:</label>
      <input
        placeholder="Enter your full name"
        type="text"
        value={fullName}
        onChange={handleNameChange}
        id="username"
      />
      <button>Submit</button>
    </form>
  );
}
