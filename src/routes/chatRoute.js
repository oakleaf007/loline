import { chatbot } from "../controllers/chatController.js";

import express from "express";

const router = express.Router();


router.post("/chatbot", chatbot);

router.get("/chattest",(req,res)=>{
    res.send("test okay")
});

export default router;