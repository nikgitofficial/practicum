import React, { useState } from "react";

const V4 = () => {
  const [search, setSearch] = useState("");
  const numbers = [1, 2, 3, 4, 5];

  // filter numbers based on search
  const filtered = numbers.filter((n) =>
    n.toString().includes(search)
  );

  return (
    <>
      <input
        type="search"
        placeholder="Search number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
       {filtered.length > 0 ?(filtered.map((n,index) =>(
        <li key={index}>{n}</li>
       ))):(
        <h1>no data found</h1>
       )}
       </ul>
    </>
  );
};

export default V4;
