import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Typography, Button } from "@mui/material";

const ActivityLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "10vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      {/* Fixed title */}
      <Typography
        variant="h3"
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#f5f5f5",
          zIndex: 1,
          paddingBottom: 2,
          textAlign: "center",
        }}
      >
        Activity Link Lists
      </Typography>

      {/* Scrollable / stretchable button section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
          overflowY: "auto",
          mt: 3,
        }}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <Link to="/practicum1">Practicum 1 mui buttons introduction</Link>
          <Link to="/practicum2">Practicum 2 login using mui,useNavigate,useState,Link etc</Link>
          <Link to="/practicum3">Practicum 3 data fetching with mui table  </Link>
          <Link to="/practicum4">Practicum  4  calculator </Link>
          <Link to="/practicum5">Practicum  5 spread operator  JS  </Link>
          <Link to="/practicum6">Practicum  6  reverse input with masking    </Link>
          <Link to="/practicum7">Practicum  7 </Link>
          
        </Stack>
      </Box>
    </Box>
  );
};

export default ActivityLinks;
