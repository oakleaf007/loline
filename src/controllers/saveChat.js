import Chat from "../models/chatstore.js";

export const saveChat = async(req,res)=>{

try{
    const {userId, userChat, botChat,botName} = req.body;
    const chat = new Chat({userId, botName, userChat, botChat});

    await chat.save();

    res.json({status:"ok",chat});
    



}catch(err){
    res.status(500).json({error: err.message});
}

};


export const getChat = async(req,res)=>{
try{

  const {userId, botName} = req.params;
    const history = await Chat.find({userId, botName}).sort({timestamp:1});
    res.json(history);
}catch(err){
    res.status(500).json({error: err.message});

}
};
