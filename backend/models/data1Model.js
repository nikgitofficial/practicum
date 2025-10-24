import mongoose from "mongoose";

const data1Schema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  { timestamps: true }
);

const Data1 = mongoose.model("Data1", data1Schema);

export default Data1;
