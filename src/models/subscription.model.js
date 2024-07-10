import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    plan: {
        type: String,
        required: true,
        enum: ['Basic', 'Premium', 'VIP'] // Example plans
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Subscription = mongoose.model('Subscription', subscriptionSchema);
