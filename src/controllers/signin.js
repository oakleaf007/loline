
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import bcrypt from "bcrypt";

export const login = async(req, res)=>{
    try {

    
    const {email, pass} = req.body;
    let status= "online";

    if (!email || !pass) return res.status(400).json({message: "Email and password required"});

   let  user = await User.findOne({email});
   if(!user){
    return res.status(404).json({message: "No user found!"})
   }

   

  const match = await bcrypt.compare(pass, user.pass);

        if(!match){
            return res.status(401).json({message: "invalid credential"});
        }
        user.status = status;
        await user.save();
        user.pass=undefined;
        return res.status(200).json({ message: "Login successfull, Quack! Quack!", user});
        
}catch(err){
    console.error(err);
    res.status(500).json({message: "Server error"});
}

};

export const signup = async(req, res)=>{
try{
 const { email, pass} = req.body;

  if (!email || !pass) return res.status(400).json({message: "Email and password required"});

    const user = await User.findOne({email});
    if(user) return res.status(409).json({message: "user already exist!"});


    const hashed = await bcrypt.hash(pass,10);
    
  await User.create({email, pass:hashed});

    res.status(201).json({message: "signup successfull"});
}catch(err){
    console.error(err);
    res.status(500).json({message: "internal server error", err});

}

}