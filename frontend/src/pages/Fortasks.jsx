import React, { useState } from "react";

const Fortasks = () => {
  const [input, setInput] = useState(() => localStorage.getItem("input") || "");
  const [quantity, setQuantity] = useState(() => localStorage.getItem("quantity") || "");

  const products = [
    { id: 1, name: "Rice", price: 50 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Milk", price: 40 },
  ];

  const handleChangeInput = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    localStorage.setItem("input", newInput);
  };

  const handleChangeQuantity = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    localStorage.setItem("quantity", newQuantity);
  };

  const result = products.find((p) => p.id === Number(input));
  const total = result ? result.price * Number(quantity) : 0;

  return (
    <>
      <h1>Find Product by ID</h1>

      <input
        type="number"
        placeholder="Enter product ID"
        value={input}
        onChange={handleChangeInput}
      />

      {result ? (
        <h2>
          {result.name} — ₱{result.price}
        </h2>
      ) : (
        input && <h2>No product found</h2>
      )}

      <input
        type="number"
        placeholder="Enter product Quantity"
        value={quantity}
        onChange={handleChangeQuantity}
      />

      <h1>Total Price: ₱{total}</h1>
    </>
  );
};

export default Fortasks;
