import mongoose from "mongoose";

const data2Schema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  { timestamps: true }
);

const Data2 = mongoose.model("Data2", data2Schema);

export default Data2;
