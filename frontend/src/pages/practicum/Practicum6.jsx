import React, { useState } from "react";

const Practicum6 = () => {
  const [inputs, setInput] = useState("");
  const [words, setWords] = useState([]);

  const addWord = () => {
    if (inputs.trim() === ""){
        alert("Please enter a word");
        return null;
        }
        
    
    setWords(prev => [...prev, inputs]);
    setInput("");
  };

  const sortWords = () => {
    setWords(prev => [...prev].sort());
  };

  return (
    <>
      <h1>Practicum 6</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={inputs}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addWord}>Add</button>
      <button onClick={sortWords}>Sort</button>

      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </>
  );
};

export default Practicum6;
