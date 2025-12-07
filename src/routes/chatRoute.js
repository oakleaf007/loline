
import { chatbot } from "../controllers/chatController.js";
import { saveChat, getChat, clearChat } from "../controllers/saveChat.js";
import express from "express";

const router = express.Router();


router.post("/chatbot", chatbot);


router.post("/savechat", saveChat);
router.get("/getchat/:userId/:activeChat",getChat);
router.delete("/clearchat/:userId/:activeChat",clearChat);

router.get("/chattest",(req,res)=>{
    res.send("test okay");
});

export default router;