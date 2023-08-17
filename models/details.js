const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

const userDetail = mongoose.model('userDetail', userSchema);

module.exports = userDetail;