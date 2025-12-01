import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    // name: { type: String },
    email: { type: String, required: true},
    pass: { type : String, required: true},
    status:{ type: String, required:true}
});

const User = mongoose.model("User", userSchema);

export default User;