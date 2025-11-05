import express from "express";
import { postv3Data, getv3Data } from "../controllers/v3Controller.js";

const router = express.Router();

router.post("/postv3data", postv3Data);
router.get("/getv3data", getv3Data);



export default router;