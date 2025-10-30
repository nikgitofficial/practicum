import Data2 from "../models/data2Model.js";



// Create 

export const postData2 = async (req,res) =>{
    const {firstname,middlename,lastname} = req.body;
    
    try{
        const newForm = new Data2({firstname,middlename,lastname});
        await newForm.save();
        res.status(201).json({message:"data saved"});
    }catch(error){
        console.error("error",error);
        res.status(500).json({message:"failed to save"});
    }
};



export const getData2 = async (req, res) => {
  try {
    const data2 = await Data2.find().sort({ createdAt: -1 });
    res.status(200).json(data2);
  } catch (error) {
    console.error("❌ Error in getData2:", error);
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
};

// UPDATE
export const updateData2 = async (req, res) => {
  const { id } = req.params;
  const { firstname, middlename, lastname } = req.body;

  try {
    const updated = await Data2.findByIdAndUpdate(
      id,
      { firstname, middlename, lastname },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data updated", updated });
  } catch (error) {
    console.error("❌ Error in updateData2:", error);
    res.status(500).json({ message: "Failed to update data", error });
  }
};

// DELETE
export const deleteData2 = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Data2.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data deleted" });
  } catch (error) {
    console.error("❌ Error in deleteData2:", error);
    res.status(500).json({ message: "Failed to delete data", error });
  }
};