require('dotenv').config
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header('auth-header')
    if(!token){
        return res.status(401).json({msg: 'No taken, access denied'})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
        next()        
    } catch (err) {
        res.send("invalid token")
        console.log(err)
        res.status(401).json({msg: "invalid token"})
             
    }
}

module.exports = auth