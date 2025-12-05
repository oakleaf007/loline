import mongoose from "mongoose";


const chatStorage = new mongoose.Schema({
    userId:{ type: String, required:true},
    botName:{type: String, required:true},
    userChat :{ type: String},
    botChat :{ type: String},
    timestamp:{type: Date, default: Date.now}
});

const Chat = mongoose.model("Chat", chatStorage);
export default Chat;