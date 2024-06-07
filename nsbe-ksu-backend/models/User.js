const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isLeader: { type: Boolean, default: false },
  phoneNumber: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);
