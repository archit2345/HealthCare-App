import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        specialty: {
            type: String,
            required: true,
            trim: true
        },
        department: {
            type: String,
            required: true,
            trim: true
        },
        qualifications: {
            type: [String], 
            required: true
        },
        experience: {
            type: Number, 
            required: true
        },
        appointments: [{
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }],
        patients: [{
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }],
        medicalRecords: [{
            type: Schema.Types.ObjectId,
            ref: 'MedicalRecord'
        }],
        schedules: [{
            type: Schema.Types.ObjectId,
            ref: 'Schedule'
        }],
        reviews: [{
            patient: {
                type: Schema.Types.ObjectId,
                ref: 'Patient'
            },
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            comment: {
                type: String,
                trim: true
            }
        }],  
    },
    { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
