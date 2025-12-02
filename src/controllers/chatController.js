import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();


const groq = new Groq({
     apiKey: process.env.GROQ_API,
    });

    export const chatbot = async(req,res)=>{
        try{
            const {chat} =req.body;

            if(!chat || !Array.isArray(chat)){
                return res.status(400).json({mesaage: "Message required or invalid message"});
            }

            const response = await groq.chat.completions.create({
                model: "llama-3.1-8b-instant",
                messages: [{
                    role: "system",
                    content: "You are a funny, friendly roasting Ai.playful sarcasm, and light teasing. Dont ask about roasting, you roast based on situagion and always reply funny way. Also not too long reply."
                },
            ...chat]
            });

            const reply = response.choices[0]?.message?.content;

            return res.status(200).json({reply});


        }catch(err){
            console.error(err);
            res.status(500).json({message: "internal server error"});
        }
    };