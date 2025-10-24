import mongoose from "mongoose";

const data3Schema = new mongoose.Schema(
    {
     firstname:{type:String,required:true},
     middlename:{type:String,required:true},
     lastname:{type:String,required:true},
    },{timestamps:true}
);
const Data3 = mongoose.model("Data3",data3Schema);
export default Data3;