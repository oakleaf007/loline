import Chat from "../models/chatstore.js";

export const saveChat = async(req,res)=>{

try{
    const {userId, userChat,userName, contactChat,activeChat} = req.body;
    const chat = new Chat({userId, botName, userChat, botChat});

    await chat.save();

    res.json({status:"ok",chat});
    



}catch(err){
    res.status(500).json({error: err.message});
}

};


export const getChat = async(req,res)=>{
try{

  const {userId, activeChat} = req.params;
    const history = await Chat.find({userId, activeChat}).sort({timestamp:1});
    res.json(history);
}catch(err){
    res.status(500).json({error: err.message});

}
};


export const clearChat = async(req,res)=>{
    try{

        const  {userId, activeChat} =req.params;

        if(!userId || !activeChat){
            return res.status(400).json({message: "invalid request!"});
            }

            const deleted = await Chat.deleteMany({userId, activeChat});

            if(!deleted) return res.status(404).json({error: "no chat found"});

           return res.status(200).json({message: "chat cleared"});
    }catch(err){
        return res.status(500).json({error:" err.message"});
    }
}