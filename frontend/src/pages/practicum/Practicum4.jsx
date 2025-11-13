import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import { pagetitle, projectitle } from "./utils/Practicum4utils.js";

const Practicum4 = () => {
  const [display, setDisplay] = useState("");
  const [firstNum, setFirstNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [isSecondNum, setIsSecondNum] = useState(false);

  const handleNumberClick = (num) => {
    setDisplay((prev) =>
      isSecondNum ? prev + num.toString() : prev + num.toString()
    );
  };

  const handleOperation = (op) => {
    if (!display) return;
    // Only set firstNum once
    if (firstNum === null) {
      setFirstNum(Number(display));
      setOperation(op);
      setDisplay(display + " " + op + " ");
      setIsSecondNum(true);
    }
  };

  const handleEquals = () => {
    if (firstNum === null || !operation) return;

    // Split display to get the second number after operator
    const parts = display.split(" ");
    const secondNum = Number(parts[2]);
    let result = 0;

    switch (operation) {
      case "+": result = firstNum + secondNum; break;
      case "-": result = firstNum - secondNum; break;
      case "*": result = firstNum * secondNum; break;
      case "/": result = secondNum === 0 ? "Error" : firstNum / secondNum; break;
      default: break;
    }

    setDisplay(result.toString());
    setFirstNum(null);
    setOperation(null);
    setIsSecondNum(false);
  };

  const handleClear = () => {
    setDisplay("");
    setFirstNum(null);
    setOperation(null);
    setIsSecondNum(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, rgba(25,25,25,1) 0%, rgba(60,60,80,1) 100%)",
        color: "#fff",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 340,
          p: 3,
          borderRadius: 4,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ letterSpacing: 1, opacity: 0.8 }}
        >
          {pagetitle}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 2, opacity: 0.6 }}
        >
          {projectitle}
        </Typography>

        {/* Display */}
        <Box
          sx={{
            mb: 3,
            backgroundColor: "rgba(255,255,255,0.15)",
            p: 2,
            borderRadius: 2,
            textAlign: "right",
            fontSize: "2rem",
            fontWeight: "bold",
            overflow: "hidden",
            color: "#00e676",
            height: 60,
          }}
        >
          {display || "0"}
        </Box>

        {/* Buttons */}
        <Grid container spacing={1}>
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map(
            (key) => (
              <Grid item xs={3} key={key}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    if (key === "=") handleEquals();
                    else if (["+", "-", "*", "/"].includes(key))
                      handleOperation(key);
                    else handleNumberClick(key);
                  }}
                  sx={{
                    height: 60,
                    fontSize: "1.2rem",
                    borderRadius: 3,
                    backgroundColor:
                      key === "="
                        ? "#00e676"
                        : ["+", "-", "*", "/"].includes(key)
                        ? "#2979ff"
                        : "rgba(255,255,255,0.15)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor:
                        key === "="
                          ? "#00c853"
                          : ["+", "-", "*", "/"].includes(key)
                          ? "#1565c0"
                          : "rgba(255,255,255,0.25)",
                    },
                    boxShadow: "none",
                  }}
                >
                  {key}
                </Button>
              </Grid>
            )
          )}

          {/* Clear Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={handleClear}
              sx={{
                height: 55,
                borderRadius: 3,
                mt: 1,
                fontWeight: "bold",
                borderColor: "rgba(255,255,255,0.2)",
                color: "#ff5252",
                "&:hover": {
                  borderColor: "#ff1744",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              CLEAR
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Practicum4;
