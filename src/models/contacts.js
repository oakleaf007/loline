import mongoose from "mongoose";


const contacts = new mongoose.Schema({
     owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    contactUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    addedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", contacts);