import React from "react";

const Jslessons = () => {
  // Age check function using if else
  const age = (a) => {
    if (a < 18) {
      return "You are a minor.";
    } else {
      return "You are an adult.";
    }
  };

  const result = age(10);
  console.log(result);

  //1. Array of ages and mapping to double the values
  const ages = [10, 20, 30, 40, 50];
  const doubled = ages.map((num) => num * 2);


  //2. Array of names and mapping to display with index
  const fname =["john","manny"];
  const lastname = ["wick","pacquiao"];

  // templates literals and JSX
  const name = { first: "John", last: "Doe" };

  // JSON example

  const json = '{"first": "John", "last": "Doe"}';
  const parsed = JSON.parse(json);


  return (
    <div style={{ padding: "20px" }}>
      <h1>You are: {result}</h1>

      <h2>List of ages (original):</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>No.</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {ages.map((num, i) => (
            <tr key={i}>
              <td>{i + 1}</td> {/* ✅ index number */}
              <td>{num}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>List of Names</h2>
<table border="2" cellPadding="5">
  <thead>
    <tr>
      <th>No.</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    {fname.map((fname, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{fname}</td>
        <td>{lastname[i]}</td>
      </tr>
    ))}
  </tbody>
</table>


      <h2>Templates Literal</h2>
      <p>welcome {`${name.first}`}</p>

        <h2>JSON Example</h2>
      <p>Raw JSON: {json}</p>
      <p>First Name: {parsed.first}</p>
      <p>Last Name: {parsed.last}</p>

      <h2>List of ages (doubled):</h2>

      <ul>
        {doubled.map((num, i) => (
          <li key={i}>
            {i + 1}. {num} {/* ✅ index number in list */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jslessons;
