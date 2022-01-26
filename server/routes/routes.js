//Importing NPM modules.
const { response } = require('express');
const express = require('express');

//Importing MiddleWares from MiddleWare folders
const { validData } = require('../middlewares/middleware')

//Importing Scheemas
const USER = require("../scheema/userSignupScheema")
const CHAT = require("../scheema/chatScheema")

//Initializing and declaring app as express
const app = express();

// Initializing and declaring router to create routes
const router = new express.Router();

/**
 * Route "/signup" to add user to db when it meet all the requirements.
 * @param {Object} body this is the body you can post.
 * @return returns the response if the data posted to db or not.
 */
router.post('/signup', validData, async(req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    await USER.insertMany(data)
      .then(data => {
        res
          .status(200)
          .send(data)
      })
      .catch(err => {
        res
          .status(203)
          .send(err)
      })
  }
  else {
    res
      .status(500)
      .send("Internal server error")
  }
})

/**
 * Route "/login" to know user is in db or not.
 * @param {Object} body this is the body you can post.
 * @return returns if data is in db or not.
 */
router.post('/login', async (req, res) => {
  const data = req.body
  console.log(data[0])
  if (data) {
    await USER.find(data[0])
      .then(data => {
        console.log(data)
        if(data.length === 0){
          res
            .status(500)
            .send("User not found")
        }else{
          res
            .status(200)
            .send("User Found")
        }
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .send(err)
      })
  }
  else {
    res
      .status(500)
      .send("Internal server error")
  }
})


/**
 * Route "/dummy" just to post dummy data into chat collection.
 * @param {Object} body this is the body you can post.
 * @return returns the response if the data posted to db or not.
 */
router.post('/dummy', (req, res) => {
  const data = req.body
  if (data) {
    CHAT.insertMany(data)
      .then(data => {
        res
          .status(200)
          .send("Chat Data reached sucessfully")
      })
      .catch(err => {
        res
          .status(500)
          .send(err.message)
      })
  }
  else {
    res
      .status(500)
      .send("Internal server error")
  }
})

//Exporting the routes
module.exports = router;