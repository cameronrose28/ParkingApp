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

const Users = mongoose.model("Users", UserSchema)

module.exports = Users;