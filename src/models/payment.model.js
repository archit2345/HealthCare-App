import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'] // Example currencies
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending"
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true
    },
    // Additional fields as per your requirements
}, { timestamps: true });

export const Payment = mongoose.model('Payment', paymentSchema);
