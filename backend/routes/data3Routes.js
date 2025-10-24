import express from "express";
import { postData3, getData3 ,updateData3,deleteData3} from "../controllers/data3Controller.js";

const router = express.Router();

router.post("/postdata3", postData3);
router.get("/getdata3", getData3);
router.put("/updatedata3/:id", updateData3); // Update
router.delete("/deletedata3/:id", deleteData3); // Delete


export default router;