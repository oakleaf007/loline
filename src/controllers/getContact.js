// import Contact from "../models/contacts.js";

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