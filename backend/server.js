import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import data1Routes from "./routes/data1Routes.js";
import data2Routes from "./routes/data2Routes.js";
import data3Routes from "./routes/data3Routes.js";
import data4Routes from "./routes/data4Routes.js";
import questionRoutes from "./routes/questionRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";



dotenv.config();

const app = express();

// Correct CORS options
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/data1", data1Routes);
app.use("/api/data2", data2Routes);
app.use("/api/data3",data3Routes);
app.use("/api/data4",data4Routes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);



// Test route
app.get("/", (req, res) => res.send("API is running..."));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server Running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err)); 
