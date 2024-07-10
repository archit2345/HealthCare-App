const patientSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
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
            type: Schema.Types.ObjectId,
            ref: 'Doctor'
        },
        appointments: [{
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }],
        medicalRecords: [{
            type: Schema.Types.ObjectId,
            ref: 'MedicalRecord'
        }],
        department: {
            type: String,
            trim: true
        },
        payments: [{
            type: Schema.Types.ObjectId,
            ref: 'Payment'
        }],
        subscription: {
            type: Schema.Types.ObjectId,
            ref: 'Subscription'
        }
    },
    { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
