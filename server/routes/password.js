const router = require('express').Router()
const bcrypt = require('bcrypt')
//user model
const User = require('../models/User')
const Admin = require('../models/Admin')



router.patch('/', 
    async (req, res) => {

        const {email, password, newPassword} = req.body

        try {
            
            let user = ""
            if(req.body.role == "user"){
                user = await User.findOne({email})
            }
            else{
                user = await Admin.findOne({email})
                console.log("admin here")
            }
            if(!user){
                res.status(500).send("invalid")
            }

            const match = await bcrypt.compare(password, user.password)
            if(!match){
                return res.status(400).json({msg: 'password is incorrect'})
            }
            const salt = await bcrypt.genSalt(10)
            const nPassword = await bcrypt.hash(newPassword, salt)
            console.log(email + "   " + password + "   " + newPassword)
            if(req.body.role == "user"){
                await User.updateOne({email: email}, {password:nPassword})
                .then(resluts => {
                    res.status(201).json({
                        msj: "Password Updated Successfully"
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            else{
                await Admin.updateOne({email: email}, {password:nPassword})
                .then(resluts => {
                    res.status(201).json({
                        msj: "Password Updated Successfully"
                    })
                })
                .catch((error) => {
                    console.log(error)
                })

            }
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    })

module.exports = router