const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        default:false
    },
})

module.exports = mongoose.model('Employee',employeeSchema)
