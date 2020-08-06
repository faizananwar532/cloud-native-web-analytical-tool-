const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
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
    activeStatus:{
        type: Boolean
    },
    role:{
        type: String
    }
})

module.exports = mongoose.model('user', userSchema)