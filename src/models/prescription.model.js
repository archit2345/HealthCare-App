import mongoose, { Schema } from "mongoose";

const prescriptionSchema = new Schema({
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
    medication: {
        type: String,
        required: true,
        trim: true
    },
    dosage: {
        amount: {
            type: String,
            required: true,
            trim: true
        },
        frequency: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: String,
            required: true,
            trim: true
        }
    },
    instructions: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    }
},
{ timestamps: true }
);

export const Prescription = mongoose.model('Prescription', prescriptionSchema);
