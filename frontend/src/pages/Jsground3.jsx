import React, { useState } from "react";

const Jsground3 = () => {
  const [search, setSearch] = useState("");
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const number = [1,2,3,4,5];

  const filteredFruits = fruits.filter(fruit =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  const sum = number.reduce((acc, curr) => acc + curr);
        

  return (
    <>
      <h1>Test this page includes filtering reduce</h1>
      <p>Total fruits: {fruits.length}</p>
      <p>Position of Mango: {fruits.indexOf("Mango") + 1}</p>
      <p>Contains Mango? {fruits.includes("Mango") ? "Yes" : "No"}</p>

      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Search fruits"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
  {filteredFruits.length > 0 ? (
    filteredFruits.map((fruit, i) => (
      <li key={i}>{fruit}</li>
    ))
  ) : (
    <li>No data found</li>
  )}
</ul>
<h1>Sum:{sum}</h1>


    </>
  );
};

export default Jsground3;
