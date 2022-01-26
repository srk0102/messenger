const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSignupSchema = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  userName: { type: String}
});

const USER = mongoose.model('users', userSignupSchema);

module.exports = USER;