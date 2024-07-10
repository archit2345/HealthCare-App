import mongoose, { Schema } from "mongoose";

const videoCallSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    //means samjhana kya h bas
    roomName: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["Scheduled", "Completed", "Cancelled", "Ongoing"],
        default: "Scheduled"
    },
}, { timestamps: true });

export const VideoCall = mongoose.model('VideoCall', videoCallSchema);
