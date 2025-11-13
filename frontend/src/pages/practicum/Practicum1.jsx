import React, { useState } from "react";
import { Box, TextField, Typography,Button,Stack } from "@mui/material";

const Practicum1 = () => {
  const [input, setInput] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        gap: 2, // spacing between items
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Typography variant="h3">Practicum1</Typography>
      <TextField
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    <Typography sx={{ textDecoration: "underline", textDecorationColor: "GrayText", fontSize: "50px" }}>
  {input}
</Typography>
  <Button variant="contained">Contained</Button>
 <Button variant="outlined">Outlined</Button>
   {/* Colored button */}
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
        {/* Small, medium, large */}
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
      <Stack direction="row" spacing={10}>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</Stack>
    </Box>
  );
};

export default Practicum1;
