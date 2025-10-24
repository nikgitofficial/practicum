import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { Modal, Box, Button, TextField, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const QuestionCreator = () => {
  const [text, setText] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await api.get("/questions");
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || options.some(opt => !opt) || !correctAnswer || !category) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      await api.post("/questions", { text, options, correctAnswer, category });
      setMessage("Question created successfully!");
      setText("");
      setOptions(["", ""]);
      setCorrectAnswer("");
      setCategory("");
      fetchQuestions();
      setOpen(false); // close modal
    } catch (err) {
      console.error(err);
      setMessage("Error creating question.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Question Manager</h1>
      <Button variant="contained" onClick={() => setOpen(true)}>Create New Question</Button>

      {/* Modal Form */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <h2>Create a New Question</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Question Text"
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Category"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              margin="normal"
            />
            <div style={{ marginTop: "1rem" }}>
              {options.map((opt, i) => (
                <div key={i} style={{ display: "flex", marginBottom: "0.5rem" }}>
                  <TextField
                    value={opt}
                    onChange={(e) => handleOptionChange(i, e.target.value)}
                    label={`Option ${i + 1}`}
                    fullWidth
                  />
                  {options.length > 2 && (
                    <Button color="error" onClick={() => removeOption(i)}>Remove</Button>
                  )}
                </div>
              ))}
              <Button variant="outlined" onClick={addOption}>Add Option</Button>
            </div>
            <Select
              fullWidth
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              displayEmpty
              style={{ marginTop: "1rem" }}
            >
              <MenuItem value="" disabled>Select Correct Answer</MenuItem>
              {options.map((opt, i) => (
                <MenuItem key={i} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>Create Question</Button>
          </form>
        </Box>
      </Modal>

      {/* Questions Table */}
      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Correct Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((q) => (
            <TableRow key={q._id}>
              <TableCell>{q.text}</TableCell>
              <TableCell>{q.category}</TableCell>
              <TableCell>{q.options.join(", ")}</TableCell>
              <TableCell>{q.correctAnswer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default QuestionCreator;
