<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 8570c46 (commit practice 4 additional)
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or brand */}
=======
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
>>>>>>> 8570c46 (commit practice 4 additional)
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>

<<<<<<< HEAD
        {/* Links */}
=======
>>>>>>> 8570c46 (commit practice 4 additional)
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
<<<<<<< HEAD
          <Button color="inherit" component={Link} to="/data2">
            Data2
          </Button>
          <Button color="inherit" component={Link} to="/displaydata2">
            DisplayData2
          </Button>
           <Button color="inherit" component={Link} to="/data3">
            Data3
          </Button>
           <Button color="inherit" component={Link} to="/data4">
            Data4
          </Button>
=======

          {/* Dropdown for Data2 to Data5 */}
          <Button color="inherit" onClick={handleMenuOpen}>
            Data
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/data2" onClick={handleMenuClose}>
              Data2
            </MenuItem>
            <MenuItem component={Link} to="/displaydata2" onClick={handleMenuClose}>
              DisplayData2
            </MenuItem>
            <MenuItem component={Link} to="/data3" onClick={handleMenuClose}>
              Data3
            </MenuItem>
            <MenuItem component={Link} to="/data4" onClick={handleMenuClose}>
              Data4
            </MenuItem>
            <MenuItem component={Link} to="/data5" onClick={handleMenuClose}>
              Data5
            </MenuItem>
            <MenuItem component={Link} to="/jslessons" onClick={handleMenuClose}>
              JS Lessons 1
            </MenuItem>
            <MenuItem component={Link} to="/jslessons2" onClick={handleMenuClose}>
              JS Lessons 2
            </MenuItem>
            <MenuItem component={Link} to="/jslessons3" onClick={handleMenuClose}>
              JS Lessons 3
            </MenuItem>
            <MenuItem component={Link} to="/jslessons4" onClick={handleMenuClose}>
              JS Lessons 4
            </MenuItem>
             <MenuItem component={Link} to="/jslessons5" onClick={handleMenuClose}>
              JS Lessons 5
            </MenuItem>
            <MenuItem component={Link} to="/jslessons6" onClick={handleMenuClose}>
              JS Lessons 6 for calculator
            </MenuItem>
            <MenuItem component={Link} to="/jslessons7" onClick={handleMenuClose}>
              JS Lessons 7 for POS
            </MenuItem>
            <MenuItem component={Link} to="/jslessons8" onClick={handleMenuClose}>
              JS Lessons 8 for mapping
            </MenuItem>
             <MenuItem component={Link} to="/tasks1" onClick={handleMenuClose}>
              JS taks
            </MenuItem>
            <MenuItem component={Link} to="/jsground1" onClick={handleMenuClose}>
              JS ground 1
            </MenuItem>
          </Menu>

          {/* Other buttons remain the same */}
>>>>>>> 8570c46 (commit practice 4 additional)
          <Button color="inherit" component={Link} to="/questionnaire">
            Questionnaire
          </Button>
          <Button color="inherit" component={Link} to="/create-question">
<<<<<<< HEAD
            Question creator 
=======
            Question creator
>>>>>>> 8570c46 (commit practice 4 additional)
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
