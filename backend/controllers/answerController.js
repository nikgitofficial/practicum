import Answer from "../models/Answer.js";

// Get all answers
export const getAnswers = async (req, res) => {
  try {
    const answers = await Answer.find().populate("responses.questionId");
    // Format data to include correctness
    const formatted = answers.map(a => ({
      user: a.user,
      responses: a.responses.map(r => ({
        question: r.questionId?.text || "Question deleted",
        selected: r.answer,
        correct: r.questionId?.correctAnswer || "N/A",
        isCorrect: r.answer === r.questionId?.correctAnswer
      }))
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Save new answers
export const createAnswer = async (req, res) => {
  try {
    const { user, responses } = req.body;

    if (!user) {
      return res.status(400).json({ message: "User name is required" });
    }

    // ✅ Check if username already exists
    const existingUser = await Answer.findOne({ user });
    if (existingUser) {
      return res.status(400).json({ message: "This username already exists" });
    }

    const newAnswer = new Answer({
      user,
      responses
    });

    const saved = await newAnswer.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
