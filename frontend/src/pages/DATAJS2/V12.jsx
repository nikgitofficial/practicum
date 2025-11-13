import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const V12 = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // hook for navigation

  const usernames = "nickpacs";
  const passwords = "123";

  const handleLogin = () => {
    if (username === usernames && pass === passwords) {
      alert("Login successful!");
      navigate("/v12login"); // redirect to dashboard
    } else {
      alert("Invalid username or password");
      
    }
  };


  return (
    <>
      <h1>Practicum</h1>

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
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <br /><br />
      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </>
  );
};

export default V12;
