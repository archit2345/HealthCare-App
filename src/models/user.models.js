import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        password: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required : true,
            min: 1,
            max: 110
        },

        role : {
            type: String,
            enum: ['patient', 'doctor']
        },

        dateOfBirth: {
            type: Date,
            default: null
        },

        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            default: null
        },

        bloodGroup: {
            type: String,
            enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            default: null
        },

        address: {
            street: {
                type: String,
                default: null,
                trim: true
            },
            city: {
                type: String,
                default: null,
                trim: true
            },
            state: {
                type: String,
                default: null,
                trim: true
            },
            country: {
                type: String,
                default: null,
                trim: true
            },
            postalCode: {
                type: String,
                default: null,
                trim: true
            }
        }
        
    },
    {timestamps: true}
)

export const User = mongoose.model("User", userSchema)