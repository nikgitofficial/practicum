import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Practicum2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernames = "nickpacs";
  const passwords = "123";

  const login = () => {
    if (username === usernames && password === passwords) {
      alert("Login successfully");
      navigate("/practicum1");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        position:"sticky",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        gap: 2,
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Typography variant="h4">Practicum 2 – JS & MUI Login</Typography>

      <Stack spacing={2} width="300px">
        <TextField
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button onClick={login} variant="contained" size="large">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Practicum2;
