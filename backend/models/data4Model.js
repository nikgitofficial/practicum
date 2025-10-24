import mongoose from "mongoose";

const data4Schema = new mongoose.Schema(
    {
     firstname:{type:String,required:true},
     middlename:{type:String,required:true},
     lastname:{type:String,required:true},
    },{timestamps:true}
);
const Data4 = mongoose.model("Data4",data4Schema);
export default Data4;