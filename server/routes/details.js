const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../midleware/auth')

//user model
const User = require('../models/User')
const Admin = require('../models/Admin')


router.get('/', auth , async (req, res)=>{
    try {
        let user = ""
        if(req.user.role == "user"){
            user = await User.findById(req.user.id)
        }
        else{
            user = await Admin.findById(req.user.id)
        }
           
        console.log("user   +" +req.user.id) 
        res.json(user)    
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Servre Error')        
    }
})

module.exports = router