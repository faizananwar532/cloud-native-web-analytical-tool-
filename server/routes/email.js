const router = require('express').Router()
const bcrypt = require('bcrypt')
//user model
const User = require('../models/User')
const Admin = require('../models/Admin')



router.patch('/', 
    async (req, res) => {

        const {email,password, newEmail} = req.body

        try {
            console.log("change email")
            console.log(req.body.role , "user role")
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
            console.log("admin here too")
            const match = await bcrypt.compare(password, user.password)
            if(!match){
                return res.status(400).json({msg: 'password is incorrect'})
            }
            if(req.body.role == "user"){
                User.updateOne({"email":email}, {"email":newEmail})
                .then(result => {
                    console.log(result , "Email Changed");
                    res.status(201).json({
                        message: "email uploaded successfully"
                    })
                })
                .catch( error =>{
                    console.log(error)
                })
            }
            else{
                Admin.updateOne({"email":email}, {"email":newEmail})
                .then(result => {
                    console.log(result , "Email Changed");
                    res.status(201).json({
                        message: "email uploaded successfully"
                    })
                })
                .catch( error =>{
                    console.log(error)
                })

            }
            
            
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    })

module.exports = router