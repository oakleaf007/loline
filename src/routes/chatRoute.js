
import { chatbot } from "../controllers/chatController.js";
import { saveChat, getChat } from "../controllers/saveChat.js";
import express from "express";

const router = express.Router();


router.post("/chatbot", chatbot);


router.post("/savechat", saveChat);
router.get("/getchat/:userId/:botName",getChat);

router.get("/chattest",(req,res)=>{
    res.send("test okay");
});

export default router;