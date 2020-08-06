const mongoose= require('mongoose')

const adminSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    role:{
        type: String
    }
})

module.exports = mongoose.model('admin', adminSchema)