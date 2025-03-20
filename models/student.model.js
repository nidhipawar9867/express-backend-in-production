import mongoose from 'mongoose'

const studentSChema = new mongoose.Schema({
    username: String,
    eamil: {
        type: String,
        index: true,
        unique: true,
    },
    password: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
        default: Date.now()
    },

},
    { timestamps: true }
)

export const Student = mongoose.model("Student", studentSChema)