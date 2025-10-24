import Data4 from "../models/data4Model.js";

export const postData4 = async (req,res) =>{
    const {firstname,middlename,lastname} = req.body;
    
    try{
        const newForm = new Data4({firstname,middlename,lastname});
        await newForm.save();
        res.status(201).json({message:"data saved"});
    }catch(error){
        console.error("error",error);
        res.status(500).json({message:"failed to save"});
    }
};

export const getData4 = async (req, res) => {
  try {
    const data4 = await Data4.find().sort({ createdAt: -1 });
    res.status(200).json(data4);
  } catch (error) {
    console.error("❌ Error in getData4:", error);
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
};

// UPDATE
export const updateData4 = async (req, res) => {
  const { id } = req.params;
  const { firstname, middlename, lastname } = req.body;

  try {
    const updated = await Data4.findByIdAndUpdate(
      id,
      { firstname, middlename, lastname },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data updated", updated });
  } catch (error) {
    console.error("❌ Error in updateData4:", error);
    res.status(500).json({ message: "Failed to update data", error });
  }
};

// DELETE
export const deleteData4 = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Data4.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data deleted" });
  } catch (error) {
    console.error("❌ Error in deleteData4:", error);
    res.status(500).json({ message: "Failed to delete data", error });
  }
};