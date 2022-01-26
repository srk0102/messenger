const mongoose = require('mongoose')
const { Schema } = mongoose;

// var schat = new Schema({
//   msg: {type: String}
// })

// var rchat = new Schema({
//   msg: {type: String}
// })

// var chat = new Schema({
//   schat = [schat],
//   rchat = [rchat]
// })

const chatScheema = new Schema({
  phoneNumber: String,
  chat: {
    schat: [
      {
        id: String,
        phone: {type : String, required: [true, "Sender Phone Number is required"]},
        msg: String,
        TimeStamp: Date
      }
    ],
    rchat: [
      {
        id: String,
        phone: {type : String, required: [true, "Reciver Phone Number is required"]},
        msg: String,
        TimeStamp: Date
      }
    ]
  }
});

const CHAT = mongoose.model('chats', chatScheema);

module.exports = CHAT;