import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
    user_id: { required: true, type: String },
    image: { required: true, type: String },
    start_time: { required: true, type: String },
    end_time: { required: true, type: String },
    title: { required: true, type: String },
    description: { required: true, type: String },
    tags: { required: true, type: String },
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
}, { timestamps: true });

export const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
