import React, { useState } from "react";

const V9 = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState(["12321", "123123", "12312"]);

  //add
  const add = () => {
    if (input.trim() === "") return;
    setText((prev) => [...prev, input]);
    setInput("");
  };

  // remove by typing the exact value
  const remove = () => {
    if (input.trim() === "") return;
    setText((prev) => prev.filter((item) => item !== input));
    setInput("");
  };

  // remove last value
  const removelast = () => {
  setText((prev) => {
    const copy = [...prev];
    copy.pop();
    return copy;
  });
};

  const reset = () => setText(["12321", "123123", "12312"]);

  return (
    <>
      <h1>Data</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove specific elemet </button>
      <button onClick={removelast}>Remove last</button>
      <button onClick={reset}>Reset</button>

      <p>{text.join(", ")}</p>
    </>
  );
};

export default V9;
