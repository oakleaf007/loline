
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import bcrypt from "bcrypt";

export const login = async(req, res)=>{
    try {

    
    const {email, pass} = req.body;
    let status= "online";

    if (!email || !pass) return res.json({message: "Email and password required"});

   let  user = await User.findOne({email});
   if(!user){
    return res.json({message: "No user found!"})
   }

    // if(user){
    //     const match = await bcrypt.compare(pass, user.pass);
    //     if(!match){
    //         return res.json({message: "invalid credential"});
    //     }
    //     user.status = status;
    //     await user.save();
    //     return res.json({ message: "Login successfull, Quack! Quack!", user});
    
    // }

    // const hashed = await bcrypt.hash(pass, 10);

    // user= await User.create({email, pass: hashed, status});

  const match = await bcrypt.compare(pass, user.pass);

        if(!match){
            return res.json({message: "invalid credential"});
        }
        user.status = status;
        await user.save();
        return res.json({ message: "Login successfull, Quack! Quack!", user});
        
}catch(err){
    console.error(err);
    res.status(500).json({message: "Server error"});
}

};