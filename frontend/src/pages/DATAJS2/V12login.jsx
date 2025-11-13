import React from "react";
import { useNavigate } from "react-router-dom";

const V12login = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("logout successfully");
    alert("youre now directed to login");
    navigate("/v13"); 
    window.alert("Hello!");
    
  };

  return (
    <>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default V12login;
