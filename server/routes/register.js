const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//user model
const User = require('../models/User')

router.post('/',
[
    check('firstName', 'please provide a name').not().isEmpty(),
    check('lastName', 'please provide a name').not().isEmpty(),
    check('email', 'invalid email').isEmail(),
    check('password', 'min 6 carachters').isLength({min: 6})
],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
    }
    
    const {firstName, lastName, email, password,userName ,image, activeStatus,role} = req.body
    
    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg: 'user already exist'})
        }
        console.log("oyeeeeeeeee")
        user = new User({
            firstName,
            lastName,
            userName,
            email,
            password,
            image,
            activeStatus,
            role
            
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn:3600
        }, (err,token)=>{
            if(err) throw err
            res.send({token})
        })         
    } catch (err) {
        res.send('user registered')
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router




// router.post('/',
// [
//     check('firstName', 'please provide a name').not().isEmpty(),
//     check('lastName', 'please provide a name').not().isEmpty(),
//     check('email', 'invalid email').isEmail(),
//     check('password', 'min 6 carachters').isLength({min: 6})
// ],
// async (req, res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({error: errors.array()})
//     }
    
//     const {firstName, lastName, email, password,userName ,image,status} = req.body
    
//     try {
//         let admin = await Admin.findOne({email})
//         if(admin){
//             return res.status(400).json({msg: 'admin already exist'})
//         }
//         console.log("oyeeeeeeeee")
//         admin = new Admin({
//             firstName,
//             lastName,
//             userName,
//             email,
//             password,
//             image,
//             status
//         })
//         const salt = await bcrypt.genSalt(10)
//         admin.password = await bcrypt.hash(password, salt)

//         await admin.save()

//         const payload = {
//             admin:{
//                 id:admin.id
//             }
//         }

//         jwt.sign(payload, process.env.SECRET, {
//             expiresIn:3600
//         }, (err,token)=>{
//             if(err) throw err
//             res.send({token})
//         })         
//     } catch (err) {
//         res.send('admin registered')
//         console.error(err.message)
//         res.status(500).send('Server Error')
//     }
// })