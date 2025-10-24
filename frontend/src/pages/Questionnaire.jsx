import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState(""); // user name
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null); // user score
  const [nameExists, setNameExists] = useState(false); // live username check
  const [checkingName, setCheckingName] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch all questions and extract categories
  useEffect(() => {
    api.get("/questions")
      .then(res => {
        setQuestions(res.data);
        const uniqueCategories = [...new Set(res.data.map(q => q.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => console.error(err));
  }, []);

  // ✅ Check if username exists while typing
  useEffect(() => {
    if (!name.trim()) {
      setNameExists(false);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setCheckingName(true);
      try {
        const res = await api.get("/answers"); // get all submitted answers
        const exists = res.data.some(a => a.user.toLowerCase() === name.toLowerCase());
        setNameExists(exists);
      } catch (err) {
        console.error(err);
      } finally {
        setCheckingName(false);
      }
    }, 500); // debounce for 500ms

    return () => clearTimeout(delayDebounce);
  }, [name]);

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Please enter your name before submitting!");
      return;
    }
    if (nameExists) {
      alert("This username already exists. Please choose another one.");
      return;
    }
    if (!selectedCategory) {
      alert("Please select a category!");
      return;
    }

    try {
      const categoryQuestions = questions.filter(q => q.category === selectedCategory);

      // Post user answers to backend
      await api.post("/answers", {
        user: name,
        responses: Object.entries(answers)
          .filter(([qId]) => categoryQuestions.some(q => q._id === qId))
          .map(([qId, answer]) => ({ questionId: qId, answer }))
      });

      // Calculate score locally based on correctAnswer from questions
      let correctCount = 0;
      categoryQuestions.forEach(q => {
        if (answers[q._id] && answers[q._id] === q.correctAnswer) {
          correctCount++;
        }
      });

      setScore(correctCount);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Thank you for submitting, {name}!</h2>
        <p>
          You answered {score} out of {questions.filter(q => q.category === selectedCategory).length} questions correctly.
        </p>
        <p>Score: {((score / questions.filter(q => q.category === selectedCategory).length) * 100).toFixed(2)}%</p>
      </div>
    );
  }

  const filteredQuestions = selectedCategory
    ? questions.filter(q => q.category === selectedCategory)
    : [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Questionnaire</h1>

      {/* Name input */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label>
          Your Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ padding: "0.5rem", width: "250px" }}
          />
        </label>
        <div style={{ color: nameExists ? "red" : "green", marginTop: "0.3rem" }}>
          {checkingName ? "Checking username..." :
            nameExists ? "Username already exists!" : name.trim() ? "Username is available" : ""}
        </div>
      </div>

      {/* Category selector */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label>
          Select Category:{" "}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: "0.5rem", width: "250px" }}
          >
            <option value="">-- Choose category --</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Questions */}
      {filteredQuestions.map(q => (
        <div key={q._id} style={{ marginBottom: "1rem" }}>
          <p><strong>{q.text}</strong></p>
          {q.options.map((opt, i) => (
            <label key={i} style={{ display: "block" }}>
              <input
                type="radio"
                name={q._id}
                value={opt}
                onChange={(e) => handleChange(q._id, e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={nameExists || !name.trim() || !selectedCategory}
      >
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
