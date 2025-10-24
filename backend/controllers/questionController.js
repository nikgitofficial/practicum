import Question from "../models/Question.js";

// Get all questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new question
export const createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    const saved = await newQuestion.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
