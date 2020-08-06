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
        console.log(req.user.role)
        let user = ""
        if(req.user.role == "user"){
            user = await User.findById(req.user.id).select("-password")   
            console.log("user")
        }
        else{
            user = await Admin.findById(req.user.id).select("-password")   
            console.log("admin")
        }
         
        console.log("user   +" +req.user.id) 
        res.json(user)    
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Servre Error')        
    }
})

router.post('/',
[
    check('email', 'invalid email').isEmail(),
    check('password', 'min 6 carachters').exists()
],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
    }
    
    const {email, password, role} = req.body
    
    try {
        let user = ""
        console.log(role,  "Role")
        if(role === "user"){
            user = await User.findOne({email})
        }
        else{
            user = await Admin.findOne({email})
        }
        
        if(!user){
            return res.status(400).json({msg: 'invalid user'})
        }

        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(400).json({msg: 'password is incorrect'})
        }
        console.log(user.activeStatus)
        if(user.activeStatus || role == "admin"){
            const payload = {
                user:{
                    id:user.id,
                    role: user.role
                }
            }
    
            jwt.sign(payload, process.env.SECRET, {
                expiresIn:3600
            }, (err,token)=>{
                if(err) throw err
                res.send({token})
            })

        }
        else{
            res.send('User is Deactivated by admin')
        }

                 
    } catch (err) {
        res.send('user registered')
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router