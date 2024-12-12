import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
}, { timestamps: true });

export const User = models.User || mongoose.model("User", userSchema);
