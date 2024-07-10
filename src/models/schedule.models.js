import mongoose, { Schema } from "mongoose";

const timeSlotSchema = new Schema(
    {
        startTime: {
            type: String, 
            required: true,
            validate: {
                validator: function (v) {
                    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); 
                },
                message: props => `${props.value} is not a valid time format!`
            }
        },
        endTime: {
            type: String, 
            required: true,
            validate: {
                validator: function (v) {
                    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); 
                },
                message: props => `${props.value} is not a valid time format!`
            }
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
    },
    { _id: false } 
);

const scheduleSchema = new Schema(
    {
        doctor: {
            type: Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        day: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        timeSlots: {
            type: [timeSlotSchema], 
            required: true
        },
        notes: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export const Schedule = mongoose.model('Schedule', scheduleSchema);
