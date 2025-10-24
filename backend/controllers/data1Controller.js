import Data1 from "../models/data1Model.js";

export const postData1 = async (req,res) =>{
    const {firstname,middlename,lastname} = req.body;
    
    try{
        const newForm = new Data1({firstname,middlename,lastname});
        await newForm.save();
        res.status(201).json({message:"data saved"});
    }catch(error){
        console.error("error",error);
        res.status(500).json({message:"failed to save"});
    }
};

export const getData1 = async (req, res) => {
  try {
    const data1 = await Data1.find().sort({ createdAt: -1 });
    res.status(200).json(data1);
  } catch (error) {
    console.error("❌ Error in getData1:", error);
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
};

// UPDATE
export const updateData1 = async (req, res) => {
  const { id } = req.params;
  const { firstname, middlename, lastname } = req.body;

  try {
    const updated = await Data1.findByIdAndUpdate(
      id,
      { firstname, middlename, lastname },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data updated", updated });
  } catch (error) {
    console.error("❌ Error in updateData1:", error);
    res.status(500).json({ message: "Failed to update data", error });
  }
};

// DELETE
export const deleteData1 = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Data1.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data deleted" });
  } catch (error) {
    console.error("❌ Error in deleteData1:", error);
    res.status(500).json({ message: "Failed to delete data", error });
  }
};