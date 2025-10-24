import Data3 from "../models/data3Model.js";

export const postData3 = async (req,res) =>{
    const {firstname,middlename,lastname} = req.body;
    
    try{
        const newForm = new Data3({firstname,middlename,lastname});
        await newForm.save();
        res.status(201).json({message:"data saved"});
    }catch(error){
        console.error("error",error);
        res.status(500).json({message:"failed to save"});
    }
};

export const getData3 = async (req, res) => {
  try {
    const data3 = await Data3.find().sort({ createdAt: -1 });
    res.status(200).json(data3);
  } catch (error) {
    console.error("❌ Error in getData3:", error);
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
};

// UPDATE
export const updateData3 = async (req, res) => {
  const { id } = req.params;
  const { firstname, middlename, lastname } = req.body;

  try {
    const updated = await Data3.findByIdAndUpdate(
      id,
      { firstname, middlename, lastname },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data updated", updated });
  } catch (error) {
    console.error("❌ Error in updateData3:", error);
    res.status(500).json({ message: "Failed to update data", error });
  }
};

// DELETE
export const deleteData3 = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Data3.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data deleted" });
  } catch (error) {
    console.error("❌ Error in deleteData3:", error);
    res.status(500).json({ message: "Failed to delete data", error });
  }
};