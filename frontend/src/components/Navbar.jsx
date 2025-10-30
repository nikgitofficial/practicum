import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        JS
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          {/* Dropdown Menu */}
          <Button color="inherit" onClick={handleMenuOpen}>
            Data & JS
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
              JS Lessons 6
            </MenuItem>
            <MenuItem component={Link} to="/jslessons7" onClick={handleMenuClose}>
              JS Lessons 7
            </MenuItem>
            <MenuItem component={Link} to="/jslessons8" onClick={handleMenuClose}>
              JS Lessons 8
            </MenuItem>
            <MenuItem component={Link} to="/jsground1" onClick={handleMenuClose}>
              JS Ground1
            </MenuItem>
            <MenuItem component={Link} to="/jsground2" onClick={handleMenuClose}>
              JS Ground2 js click lessons
            </MenuItem>
            <MenuItem component={Link} to="/jsground3" onClick={handleMenuClose}>
              JS Ground3 js click lessons 2
            </MenuItem>
            <MenuItem component={Link} to="/jsground4" onClick={handleMenuClose}>
              JS Ground4 
            </MenuItem>
            <MenuItem component={Link} to="/jsground5" onClick={handleMenuClose}>
              JS Ground5 
            </MenuItem>
            <MenuItem component={Link} to="/jsground6" onClick={handleMenuClose}>
              JS Ground6 
            </MenuItem>
            <MenuItem component={Link} to="/jsground7" onClick={handleMenuClose}>
              JS Ground7 
            </MenuItem>
            <MenuItem component={Link} to="/jsgames" onClick={handleMenuClose}>
              JS Games
            </MenuItem>
          </Menu>

          {/* Other buttons */}
          <Button color="inherit" component={Link} to="/questionnaire">
            Questionnaire
          </Button>
          <Button color="inherit" component={Link} to="/create-question">
            Question creator
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
