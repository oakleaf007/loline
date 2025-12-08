import mongoose from "mongoose";


const contacts = new mongoose.Schema({
     
     ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    addedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", contacts);