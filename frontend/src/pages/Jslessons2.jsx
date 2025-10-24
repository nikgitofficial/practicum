import React, { useState } from "react";

const Jslessons2 = () => {
  // ✅ State variables
  const [age, setAge] = useState("");       // For age input
  const [qrcode, setCode] = useState("");   // For QR code input
  const [index, setIndex] = useState("");   // For array index input

  // ✅ Function: Check if user is minor or adult
  const checkStatus = (age) => {
    if (age === "" || isNaN(age)) {
      return "Please enter a valid number.";
    } else if (age < 18) {
      return "You are a minor.";
    } else {
      return "You are an adult.";
    }
  };

  // ✅ Array of names
  const names = ["Nikko", "John"];

  // ✅ Function: Get name from array using index
  const getName = (i) => {
    if (i === "" || isNaN(i)) return "Please enter a valid number.";
    if (i < 1 || i > names.length) return "Number out of range.";
    return `Name: ${names[i - 1]}`; // -1 because arrays start at index 0
  };

  // ✅ Function: Check QR code and return product
  const getQRCodeProduct = (code) => {
    if (code === 1) {
      return "Product: Milk 🥛";
    } else if (code === 2) {
      return "Product: Bread 🍞";
    } else if (code === 3) {
      return "Product: Eggs 🥚";
    } else if (code === "" || isNaN(code)) {
      return "Please enter a valid code number.";
    } else {
      return "Unknown code ❌";
    }
  };

  // ✅ UI
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* 🔹 Page Title */}
      <h1>JavaScript Lessons 2 Page</h1>

      {/* 🔹 Divider */}
      <hr style={{ width: "60%", margin: "20px 0", border: "1px solid gray" }} />

      {/* 🔹 AGE CHECK SECTION */}
      <label>Enter your age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Type your age"
      />
      <h2>Your age is: {age}</h2>
      <h3>{checkStatus(age)}</h3>

      {/* 🔹 Divider */}
      <hr style={{ width: "60%", margin: "20px 0", border: "1px solid gray" }} />

      {/* 🔹 ARRAY INDEX SECTION */}
      <h1>Array Index Example</h1>
      <label>Enter a number (1–{names.length}):</label>
      <input
        type="number"
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        placeholder="Enter number"
      />
      <h2>{getName(index)}</h2>

      {/* 🔹 Divider */}
      <hr style={{ width: "60%", margin: "20px 0", border: "1px solid gray" }} />

      {/* 🔹 QR CODE SECTION */}
      <h1>QR Code Product Example</h1>
      <label>Enter QR Code (1–3):</label>
      <input
        type="number"
        value={qrcode}
        onChange={(e) => setCode(Number(e.target.value))}
        placeholder="Enter QR code"
      />
      <h3>{getQRCodeProduct(qrcode)}</h3>
    </div>
  );
};

export default Jslessons2;
