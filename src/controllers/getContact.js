// import Contact from "../models/contacts.js";
import User from "../models/users.js";

export const getContact = async(req, res)=>{

    try{

       const defaultContact ={
        _id: "6933097b2d429191ee7810c9",
        userName: "Oak Leaf",
        
       }
    
       return res.json([defaultContact]);


    }catch(err){    
        res.status(500).json({ error: "Server error"});
    }
}




export const searchUser = async( req, res)=>{
    try{
 const { name } = req.params;

    if(!name) return res.status(400).json({message: "please enter a username"});

    const user = await User.findOne({name});
    if(!user) return res.status(400).json({ message: "User not found check username"});

    user.email = undefined;
    user.pass= undefined;
    return res.status(200).json({message: "user fetched successfully", user});
    }catch(err){
        console.error(err);
        return res.status(500).json({ error: "server error"});

    }
   
}