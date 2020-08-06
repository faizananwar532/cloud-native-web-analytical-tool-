var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Query = require('../models/Query');
const { query } = require('express-validator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getUsers', (req, res) => {
    User.find({})    
   .then((users) => {
     res.status(200).json({
       success: true,
       data: users
     })
     // console.log(data)
   })
   .catch((error) => {
      console.log(error)
      res.status(401).json({
      message: 'Something went wrong',
      error: error
    })
   })
})

router.post('/addQuery', (req, res) => {
  const {userEmail,  userQuery, queryStatus, userRegistered} = req.body
  let newQuery = new Query({
    userEmail,
    userQuery,
    queryStatus,
    userRegistered
})
  newQuery.save()
  .then((queries) => {
    res.status(200).json({
      success: true,
      data: queries
    })
    // console.log(data)
  })
  .catch((error) => {
      console.log(error)
      res.status(401).json({
      message: 'Something went wrong',
      error: error
    })
  })
})

router.post('/getQueries', (req, res) => {
  Query.find({})    
 .then((queries) => {
   res.status(200).json({
     success: true,
     data: queries
   })
   // console.log(data)
 })
 .catch((error) => {
    console.log(error)
    res.status(401).json({
    message: 'Something went wrong',
    error: error
  })
 })
})

module.exports = router;
