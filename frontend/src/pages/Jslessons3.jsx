import React, { useState } from "react";

const Jslessons3 = () => {
  const [qrcode, setQrcode] = useState("");
  const [dresscode, setDresscode] = useState("");

  const products = ["Milk 🥛", "Bread 🍞", "Eggs 🥚"];
  const dresscodes = ["Casual 👕", "Formal 🤵", "Sporty 🏃"];

  const getQRCodeProduct = (code) => {
    if (code === "" || isNaN(code)) return "Please enter a valid number.";
    if (code < 1 || code > products.length) return "Unknown code ❌";
    return `Product: ${products[code - 1]}`;
  };

  const getdresscode = (dcode) => {
    if (dcode === "" || isNaN(dcode)) return "Please enter a valid number.";
    if (dcode < 1 || dcode > dresscodes.length) return "Unknown code ❌";
    return `Dresscode: ${dresscodes[dcode - 1]}`;
  };

 

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
      <hr style={{ width: "60%", margin: "20px 0", border: "1px solid gray" }} />

      <h1>QR Code Product Example</h1>
      <label>Enter QR Code (1–{products.length}):</label>
      <input
        type="number"
        value={qrcode}
        onChange={(e) => setQrcode(Number(e.target.value))}
        placeholder="Enter QR code"
      />
      <h3>{getQRCodeProduct(qrcode)}</h3>

      <h2>Available Products</h2>
      <ul>
        {products.map((item, i) => (
          <li key={i}>
            Code {i + 1}: {item}
          </li>
        ))}
      </ul>

      <hr style={{ width: "60%", margin: "20px 0", border: "1px solid gray" }} />
      <h1>Dress Code Example</h1>
      <label>Enter Code (1–{dresscodes.length}):</label>
      <input type="number"  value={dresscode} onChange={(e) => setDresscode(Number(e.target.value))} placeholder="Enter dress code"/>
      <h3>{getdresscode(dresscode)}</h3>
    </div>
  );
};

export default Jslessons3;
