import React, { useState } from "react";

const Jslessons7 = () => {
  const [department, setDepartment] = useState(0);
  const [selectitem, setSelectitem] = useState("");
  const [quantity, setQuantity] = useState("");

  const groceriesitem = [
    "Rice",
    "Bread",
    "Eggs",
    "Milk",
    "Fruits",
    "Vegetables",
  ];

  const prices = [50, 30, 10, 40, 25, 35]; // prices aligned by index

  const selectedDepartment = () => {
    if (department === "1") {
      return (
        <ul>
          {groceriesitem.map((item, index) => (
            <li key={index}>
              {index + 1}. {item} — ₱{prices[index]}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Please select a valid department</p>;
    }
  };

  const selecteditem = () => {
    const index = parseInt(selectitem) - 1;

    if (department === "1" && index >= 0 && index < groceriesitem.length) {
      const itemName = groceriesitem[index];
      const itemPrice = prices[index];
      const total = quantity ? itemPrice * quantity : 0;

      return (
        <div>
          <p>
            You selected: <strong>{itemName}</strong> — ₱{itemPrice} each
          </p>

          <input
            type="number"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          {quantity && (
            <p>
              Total Price: ₱{total} ({quantity} × ₱{itemPrice})
            </p>
          )}
        </div>
      );
    } else {
      return <p>Enter a valid item number</p>;
    }
  };

  return (
    <>
      <h2>Js POS</h2>
      <p>Select Department</p>
      <p>1. Grocery</p>

      <input
        placeholder="Enter Department Number"
        type="number"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      {selectedDepartment()}

      <input
        placeholder="Select Item Number"
        type="number"
        value={selectitem}
        onChange={(e) => setSelectitem(e.target.value)}
      />

      {selecteditem()}
    </>
  );
};

export default Jslessons7;
