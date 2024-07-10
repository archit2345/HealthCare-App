import mongoose, { Schema } from "mongoose";

const labResultSchema = new Schema({
    testName: {
        type: String,
        required: true,
        trim: true
    },
    result: {
        type: String,
        required: true,
        trim: true
    },
    //like mg/dl, calories
    units: {
        type: String,
        trim: true
    },
    referenceRange: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    }
}, { _id: false });

const reportSchema = new Schema({
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
    visitDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    diagnosis: {
        type: String,
        required: true,
        trim: true
    },
    treatment: {
        type: String,
        required: true,
        trim: true
    },
    labResults: [labResultSchema],
    followUpInstructions: {
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

export const Report = mongoose.model('Report', reportSchema);
