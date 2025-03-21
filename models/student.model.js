import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const studentSChema = new mongoose.Schema({
    username: String,
    email: {
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
studentSChema.pre("save", function (next){
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})
// to create custom methods on models
// schemaName.methods.customMethodName = function (){}
studentSChema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password, this.password)
}
studentSChema.methods.fullName = function (){
    return this.firstName + " " + this.lastName
}
export const Student = mongoose.model("Student", studentSChema)