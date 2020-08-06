const express = require('express')
const app = express()
const path = require('path')

const connectDB = require('./config/db')
//connect to database
connectDB()

app.use(express.json({ extended: true}))
app.use(express.static('uploads'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', require('./routes/index'))
app.use('/signup', require('./routes/register'))
app.use('/signin', require('./routes/signin'))
app.use('/details', require('./routes/details'))
app.use('/settings/email', require('./routes/email'))  
app.use('/settings/paswrd', require('./routes/password'))  
app.use('/settings/pic', require('./routes/file'))  

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))