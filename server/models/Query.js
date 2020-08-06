const mongoose= require('mongoose')

const querySchema = new mongoose.Schema({
    
    userEmail:{
        type: String,
        required: true
    },
    userQuery:{
        type: String,
        required: true
    },
    queryStatus:{
        type: String,
    },
    userRegistered:{
        type: Boolean
    }
})

module.exports = mongoose.model('query', querySchema)