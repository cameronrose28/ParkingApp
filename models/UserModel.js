<<<<<<< HEAD
const mongoose = require('mongoose');
//Notes:
// Bollean for admin or?


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        require: true
    }
})
=======
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    require: true
  }
});
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
