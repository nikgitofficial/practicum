import express from "express";
import { getAnswers, createAnswer } from "../controllers/answerController.js";

const router = express.Router();

router.get("/", getAnswers);
router.post("/", createAnswer);

export default router;
