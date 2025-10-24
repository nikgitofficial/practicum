import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true }, // ✅ unique username
  responses: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      answer: String
    }
  ]
}, { timestamps: true });

export default mongoose.model("Answer", answerSchema);
