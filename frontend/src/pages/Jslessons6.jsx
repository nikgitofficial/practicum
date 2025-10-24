import React, { useState } from "react";

const Jslessons6 = () => {
  const [fnum, setFnum] = useState(() => localStorage.getItem("fnum") || "");
  const [snum, setSnum] = useState(() => localStorage.getItem("snum") || "");
  const [result, setResult] = useState(() => localStorage.getItem("result") || "");

  const handleChangeFnum = (e) => {
    const newFnum = e.target.value;
    setFnum(newFnum);
    localStorage.setItem("fnum", newFnum);
  };

  const handleChangeSnum = (e) => {
    const newSnum = e.target.value;
    setSnum(newSnum);
    localStorage.setItem("snum", newSnum);
  };

  // operations

  const add = () => {
    const sum = Number(fnum) + Number(snum);
    setResult(sum);
    localStorage.setItem("result", sum);
  };
    const subtraction = () => {
    const diff = Number(fnum) - Number(snum);
    setResult(diff);
    localStorage.setItem("result", diff);
  };

    const multiplication = () => {
    const product = Number(fnum) * Number(snum);
    setResult(product);
    localStorage.setItem("result", product);
  };

    const division = () => {
    const qoutient = Number(fnum) / Number(snum);
    setResult(qoutient);
    localStorage.setItem("result", qoutient);
  };

  // 🧹 Clear everything
  const clearAll = () => {
    localStorage.removeItem("fnum");
    localStorage.removeItem("snum");
    localStorage.removeItem("result");
    setFnum("");
    setSnum("");
    setResult("");
  };

  return (
    <>
      <h2>Calculator will be here</h2>

      <input
        type="number"
        placeholder="First Number"
        value={fnum}
        onChange={handleChangeFnum}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Second Number"
        value={snum}
        onChange={handleChangeSnum}
      />
      <br />
      <br />
      <button onClick={add}>Add</button>  
      <button onClick={subtraction}>Subtract</button>
      <button onClick={multiplication}>Multiply</button>
      <button onClick={division}>Divide</button>
      <button onClick={clearAll} style={{ marginLeft: "10px" }}>
        Clear
      </button>
      <h1>Result: {result}</h1>
    </>
  );
};

export default Jslessons6;
