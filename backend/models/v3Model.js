import mongoose from "mongoose";

const v3Schema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    },
  { timestamps: true }
);

const V3 = mongoose.model("V3", v3Schema);

export default V3;
