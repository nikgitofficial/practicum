import Data2 from "../models/v3Model.js";


// Create 

export const postv3Data = async (req,res) =>{
    const {firstname} = req.body;
    
    try{
        const newForm = new Data2({firstname});
        await newForm.save();
        res.status(201).json({message:"data saved"});
    }catch(error){
        console.error("error",error);
        res.status(500).json({message:"failed to save"});
    }
};

//get data
export const getv3Data = async (req, res) => {
  try {
    const data2 = await Data2.find().sort({ createdAt: -1 });
    res.status(200).json(data2);
  } catch (error) {
    console.error("❌ Error in getData2:", error);
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
};