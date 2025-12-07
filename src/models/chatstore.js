import mongoose from "mongoose";


const chatStorage = new mongoose.Schema({
    userId:{ type: String, required:true},
    activeChat:{type: String, required:true},
    userChat :{ type: String},
    contactChat :{ type: String},
    timestamp:{type: Date, default: Date.now}
});

const Chat = mongoose.model("Chat", chatStorage);
export default Chat;