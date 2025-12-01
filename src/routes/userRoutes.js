import {login} from "../controllers/signin.js";
import express from "express";

const router = express.Router();

router.post("/login", login);

router.get("/test",(req,res)=>{
    res.send({ message: "router working"});
});


export default router;