import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";

const Practicum3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to load data", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 5,
        px: 2,
        bgcolor: "#f0f2f5",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, fontWeight: 600, textAlign: "center", color: "#1976d2" }}
      >
        Practicum 3 Comments
      </Typography>

      {loading ? (
        <CircularProgress color="primary" />
      ) : data.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          No comments found.
        </Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 900, width: "100%", maxHeight: "70vh", overflowY: "auto" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((comment) => (
                <TableRow key={comment.id} hover>
                  <TableCell>{comment.name}</TableCell>
                  <TableCell>{comment.email}</TableCell>
                  <TableCell>{comment.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Practicum3;
