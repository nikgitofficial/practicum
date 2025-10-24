import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, List, ListItem, IconButton } from "@mui/material";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Replace with your backend URL
const API_URL = "http://localhost:5000/api/data4";

const Data4 = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
  });

  const [dataList, setDataList] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch all entries when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/getdata4`);
      setDataList(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update existing entry
        await axios.put(`${API_URL}/updatedata4/${editId}`, formData);
        setEditId(null);
      } else {
        // Create new entry
        await axios.post(`${API_URL}/postdata4`, formData);
      }
      setFormData({ firstname: "", middlename: "", lastname: "" });
      fetchData(); // Refresh list
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      firstname: item.firstname,
      middlename: item.middlename,
      lastname: item.lastname,
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/deletedata4/${id}`);
      fetchData(); // Refresh list
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  // Cancel edit handler
  const handleCancelEdit = () => {
    setFormData({ firstname: "", middlename: "", lastname: "" });
    setEditId(null);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Data4 Form
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          mb: 4,
        }}
      >
        <TextField
          label="Firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Middlename"
          name="middlename"
          value={formData.middlename}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button type="submit" variant="contained" fullWidth>
            {editId ? "Update" : "Submit"}
          </Button>
          {editId && (
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>

      <Typography variant="h6">Saved Data</Typography>
      <List>
        {dataList.map((item) => (
          <ListItem
            key={item._id}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => handleEdit(item)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(item._id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            {item.firstname} {item.middlename} {item.lastname}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Data4;
