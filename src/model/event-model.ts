import mongoose, { Schema, models } from "mongoose";

const EventSchema = new Schema({
  user_id: { required: true, type: String,},
  image: { required: true, type: String },
  start_time: { required: true, type: String },
  end_time: { required: true, type: String },
  title: { required: true, type: String },
  description: { required: true, type: String },
  tags: { required: true, type: String },
    lat: {
        required: true,
        type: Number,
    },
    lng: {
        required: true,
        type: Number,
    },
}, { timestamps: true });

export const Event = models.Event || mongoose.model("Event", EventSchema);
