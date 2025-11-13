import React, { useState } from "react";

const Practicum5 = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState(["123","123","123"]); // initial array

  const addText = () => {
    if (input.trim() === "") return; // prevent empty input
    setText(prev => [...prev, input]); // add new input to array
    setInput(""); // clear input
  };

  const removeText = () => {
    setText(prev => prev.slice(0, -1)); // remove last item from array
  }

  return (
    <>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addText}>Add Text</button>
      <button onClick={removeText}>Remove text</button>

      <p>{text.map((t,index)=>(
        <li key={index}>{t}</li>
      ))}</p>
    </>
  );
};

export default Practicum5;
