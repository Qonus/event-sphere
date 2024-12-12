import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String }
}, {timestamps: true});


export const User = mongoose.models.User || mongoose.model("User", UserSchema);
