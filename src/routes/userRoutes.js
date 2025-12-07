import {login, signup} from "../controllers/signin.js";
import { getContact } from "../controllers/getContact.js";
import express from "express";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.get("/getcontact", getContact);
router.get("/test",(req,res)=>{
    res.send({ message: "router working"});
});


export default router;