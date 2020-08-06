const router = require('express').Router()
const bcrypt = require('bcrypt')
//user model
const user = require('../models/User')
const admin = require('../models/Admin')

const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
       cb(null, "IMAGE-" + Date.now() + file.originalname);
    }
 });

 const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

 const upload = multer({
    
    storage: storage
 });

router.patch('/',upload.single('image'), async (req, res) => {
    
    const {email} = req.body
    console.log(email)
    
    var imageFile = req.file.filename
    console.log(imageFile)

    try {        
        let isEmail = ""
        if(req.body.role == "user"){
            let isEmail = await user.findOne({email})
        
            if(!isEmail){
                res.status(500).send("invalid")
                return
            }
            await user
            .findOne({email})
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "created successfully"
                })
                return
            })
            console.log(isEmail)
            console.log("heyyyyy      2")
            await user.updateOne({email: email}, {image: imageFile})
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "created successfully"
                })
                return
            })
            res.send({user})
            return
        }
        else{
            let isEmail = await admin.findOne({email})
            console.log("admin pic")
            if(!isEmail){
                res.status(500).send("invalid")
                return
            }
            await admin
            .findOne({email})
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "created successfully"
                })
                return
            })
            console.log(isEmail)
            console.log("heyyyyy      2")
            await admin.updateOne({email: email}, {image: imageFile})
            .then(result => {
                console.log(result);
                res.send({admin})
                res.status(201).json({
                    message: "created successfully"
                })
            })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send("error")
        return
    }
    /*    const user = new User({
            firstName: req.body.name,
            image: imageFile            
        })
        user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "created successfully"
            })
        })
        res.send(user)*/
})

/*const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myfile");

 const obj = (req,res) => {
    upload (req, res,async  () => {
        const {email, image} = req.body
        try {
            let userModel = await user.findOne({email})
            if(!userModel){
                res.status(500).send("invalid")
            }
             
            await user.findOneAndUpdate(email, {image:image})
            res.send({user})
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
       /*Now do where ever you want to do
    });
 }


router.patch("/", obj);
*/


module.exports = router