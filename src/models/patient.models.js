import mongoose, {Schema} from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        
        emergencyContact: {
            name: {
                type: String,
                default: null,
                trim: true
            },
            relationship: {
                type: String,
                default: null,
                trim: true
            },
            contactNumber: {
                type: String,
                default: null,
                trim: true
            }
        },
            chosenDoctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor'
            },
            appointments: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Appointment'
            }],
            medicalRecords: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'MedicalRecord'
            }],
            department: {
                type: String,
                trim: true
            },
            payments: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Payment'
            }],
            subscription: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subscription'
            }
    },
    {timestamps: true}
)

export const Patient = mongoose.model('Patient', patientSchema);