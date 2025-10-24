import React from "react";

const Data5 = () => {
  const minus = (a, b) => a - b;

  const a = 10;
  const b = 1;
  const result = minus(a, b);

  const names = ["John", "Jane", "Doe", "Loko"];
  
  // Triangle pattern
  const triangle = [];
  for (let i = 0; i <= 5; i++) {
    triangle.push("* ".repeat(i));
  }

  return (
    <div>
        
      <h1>Result: {result}</h1>
      <h1>Names:</h1>
<table border="1">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {names.map((n, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{n}</td>
      </tr>
    ))}
  </tbody>
</table>

      <h1>Triangle Pattern:</h1>
      <ul>
        {triangle.map((row, index) => (
          <li key={index}>{row}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data5;
