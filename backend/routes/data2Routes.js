import express from "express";
import { postData2, getData2 ,updateData2,deleteData2} from "../controllers/data2Controller.js";

const router = express.Router();

router.post("/postdata2", postData2);
router.get("/getdata2", getData2);
router.put("/updatedata2/:id", updateData2); // Update
router.delete("/deletedata2/:id", deleteData2); // Delete


export default router;