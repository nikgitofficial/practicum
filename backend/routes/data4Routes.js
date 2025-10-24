import express from "express";
import { postData4, getData4 ,updateData4,deleteData4} from "../controllers/data4Controller.js";

const router = express.Router();

router.post("/postdata4", postData4);
router.get("/getdata4", getData4);
router.put("/updatedata4/:id", updateData4); 
router.delete("/deletedata4/:id", deleteData4);


export default router;