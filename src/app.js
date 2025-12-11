import express from "express"
import "./dotenv.js";
import cors from "cors";

import mongoose from "mongoose";

import path from "path";
import { fileURLToPath } from "url";





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
import chatRoute from "./routes/chatRoute.js";
import  ping from '../src/service/ping.js';

app.use("/api", userRoutes);
app.use("/api", chatRoute);
app.use("/api",ping);

export default app;