import React, { useState } from "react";

const V11 = () => {
  const [search, setSearch] = useState("");

  // products
  const products = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Phone", price: 500, inStock: false },
    { id: 3, name: "Tablet", price: 300, inStock: true },
  ];

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Ternary and Logical Operators</h1>
      <input
        type="search"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <li key={product.id}>
              {product.inStock && product.price > 0
                ? `${product.name} - $${product.price}`
                : `${product.name} - Out of stock`}
            </li>
          ))
        ) : (
          <p>No data found</p>
        )}
      </ol>
    </>
  );
};

export default V11;
