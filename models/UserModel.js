const mongoose = require('mongoose');

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
})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users;