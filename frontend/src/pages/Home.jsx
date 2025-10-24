import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

// Main Home component
const Home = () => {
  // Form data state for creating/updating entries
  const [formData, setFormData] = useState({ firstname: "", middlename: "", lastname: "" });

  // List of data fetched from backend
  const [dataList, setDataList] = useState([]);

  // Loading state for data fetch
  const [loading, setLoading] = useState(false);

  // Tracks which entry is currently being edited
  const [editingId, setEditingId] = useState(null);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false); // Edit modal visibility
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // Delete modal visibility
  const [currentItem, setCurrentItem] = useState(null); // Current item selected for edit/delete

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from backend
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/data1/getdata1");
      setDataList(res.data); // Save fetched data to state
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Handle input changes in form fields
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission for create or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing entry
        await axios.put(`http://localhost:5000/api/data1/updatedata1/${editingId}`, formData);
        setEditingId(null); // Reset editingId after update
      } else {
        // Create new entry
        await axios.post("http://localhost:5000/api/data1/postdata1", formData);
      }
      setFormData({ firstname: "", middlename: "", lastname: "" }); // Clear form
      fetchData(); // Refresh data list
      setEditModalOpen(false); // Close edit modal if open
    } catch (err) {
      console.error(err);
    }
  };

  // Open Edit Modal and populate form with selected item
  const handleEditClick = (item) => {
    setCurrentItem(item);
    setFormData({ firstname: item.firstname, middlename: item.middlename, lastname: item.lastname });
    setEditingId(item._id);
    setEditModalOpen(true);
  };

  // Open Delete Confirmation Modal
  const handleDeleteClick = (item) => {
    setCurrentItem(item);
    setDeleteModalOpen(true);
  };

  // Confirm deletion of selected entry
  const handleDeleteConfirm = async () => {
    if (!currentItem) return;
    try {
      await axios.delete(`http://localhost:5000/api/data1/deletedata1/${currentItem._id}`);
      fetchData(); // Refresh data after deletion
    } catch (err) {
      console.error(err);
    }
    setDeleteModalOpen(false); // Close modal
    setCurrentItem(null); // Reset selected item
  };

  // Inline edit (kept for backward compatibility)
  const handleEdit = (item) => {
    setFormData({ firstname: item.firstname, middlename: item.middlename, lastname: item.lastname });
    setEditingId(item._id);
  };

  // Inline delete (kept for backward compatibility)
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await axios.delete(`http://localhost:5000/api/data1/deletedata1/${id}`);
        fetchData();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Page title */}
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>

      {/* Input Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField label="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
        <TextField label="Middle Name" name="middlename" value={formData.middlename} onChange={handleChange} required />
        <TextField label="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required />
        <Button type="submit" variant="contained">
          {editingId ? "Update" : "Save"} {/* Update or Save based on editing state */}
        </Button>
      </Box>

      {/* Data Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Middle Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              // Show loading text while fetching data
              <TableRow>
                <TableCell colSpan={5}>Loading...</TableCell>
              </TableRow>
            ) : (
              // Map over dataList and display each entry in a row
              dataList.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.firstname}</TableCell>
                  <TableCell>{item.middlename}</TableCell>
                  <TableCell>{item.lastname}</TableCell>
                  <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
                  <TableCell>
                    {/* Edit and Delete buttons */}
                    <Button
                      onClick={() => handleEditClick(item)} // Open edit modal
                      variant="outlined"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(item)} // Open delete modal
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <DialogTitle>Edit Entry</DialogTitle>
          <DialogContent>
            {/* Fields inside modal */}
            <TextField
              label="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Middle Name"
              name="middlename"
              value={formData.middlename}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditModalOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Box sx={{ p: 3 }}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            {/* Show the name of the item being deleted */}
            <Typography>
              Are you sure you want to delete {currentItem?.firstname} {currentItem?.lastname}?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

// Export Home component as default
export default Home;
