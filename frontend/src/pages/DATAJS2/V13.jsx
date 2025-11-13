import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const V13 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const linker = useNavigate();

  const users = [
    { name: "miracle", password: "123" },
    { name: "dendi", password: "123" },
    { name: "notail", password: "123" },
    {name:"nickpacs",password:"123"}
  ];

  const handlelogin = () => {
    const user = users.find(u => u.name === username && u.password === password);

    if (user) {
      alert("Login successful");
      linker("/v12login");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <h1>Practicum #login</h1>
      <p>Username</p>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handlelogin}>Login</button>
    </>
  );
};

export default V13;
