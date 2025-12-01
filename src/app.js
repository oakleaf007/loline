import express from "express"

import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import path from "path";
import { fileURLToPath } from "url";



dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB connected via localhost"))
    .catch((err)=> console.log("Mongo Error", err));

const app = express();

app.use(cors());
app.use(express.json());

 const __filePath = fileURLToPath(import.meta.url);

 const __dirname = path.dirname(__filePath);
 


app.use(express.static(path.join(__dirname, "../frontend")))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend", "index.html"));

   
});

import userRoutes from "./routes/userRoutes.js";

app.use("/api", userRoutes);


export default app;