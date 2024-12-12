import mongoose, { Schema, models } from "mongoose";

const eventSchema = new Schema({
    coords: {
        required: true,
        type: {
            longitude: {
                required: true,
                type: Number,
            },
            lattit8de: {
                required: true,
                type: Number,
            }
        },
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

export const Event = models.Event || mongoose.model("Event", eventSchema);
