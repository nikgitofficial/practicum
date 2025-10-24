import express from "express";
import { postData1, getData1 ,updateData1,deleteData1} from "../controllers/data1Controller.js";

const router = express.Router();

router.post("/postdata1", postData1);
router.get("/getdata1", getData1);
router.put("/updatedata1/:id", updateData1); // Update
router.delete("/deletedata1/:id", deleteData1); // Delete


export default router;