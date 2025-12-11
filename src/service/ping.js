import express from 'express';

const wake = express.Router();

wake.get("/ping", (req,res)=>{
    res.send("pong");
})

export default wake;
