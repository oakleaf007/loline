import {login, signup} from "../controllers/signin.js";
import { getContact, searchUser,saveContact } from "../controllers/getContact.js";
import express from "express";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/savecontact", saveContact);

router.get("/searchcontact/:name", searchUser);
router.get("/getcontact/:ownerId", getContact);
router.get("/test",(req,res)=>{
    res.send({ message: "router working"});
});


export default router;