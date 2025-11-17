import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import {useNavigate} from "react-router-dom";

const Practicum6 = () => {
   const[input,setInput] = useState("");
  
      const reverseinput = () =>{
            return[...input].reverse(),"*".repeat(input.length) + input.slice(5); ;
      }
  
      const rev = reverseinput();
      console.log(rev);

    

     

  

  return (
    <>
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
          <Typography variant="h4">Practicum 6 reverse input with masking </Typography>
    
          <Stack spacing={2} width="300px">
            <Typography>
              reverse in js
            </Typography>
            <TextField
              label="input"
              placeholder="Enter text to reverse"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Typography variant="body1" color="initial">{rev}</Typography>
            
          </Stack>
        </Box>
    </>
    
  );
};

export default Practicum6;

