import Contact from "../models/contacts.js";
import User from "../models/users.js";

export const getContact = async(req, res)=>{

    try{

    //    const defaultContact ={
    //     _id: "6933097b2d429191ee7810c9",
    //     userName: "Oak Leaf",
        
    //    }
     const {ownerId} = req.params;

     if(!ownerId) return res.status(400).json({message: "no Id recieved"});

     const contact = await Contact.find({ownerId})

    if(contact.length === 0 ) return res.status(400).json({ message: "No contact or user found!"});
      
    
    return res.status(200).json({message: "fetched successfully",contact });


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

export const saveContact = async (req, res)=>{

    try{
            const { ownerId, contactId } = req.body;

 const owner = await User.findById(ownerId);
const contactUser = await User.findById(contactId);


if (!contactUser) {
            return res.status(404).json({ message: "Contact not found" });
        }


 const already = await Contact.findOne({ ownerId, contactId });
        if (already) {
            return res.status(400).json({ message: "Already added" });
        }

 const newContact = await Contact.create({
            ownerId,
            contactId,
            ownerName: owner.name,
            contactName: contactUser.name
        });
         res.status(201).json({ 
            message: "Contact added", 
            contact: newContact 
        });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}