const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  created: {
    type: Date,
    default: Date.now
},
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
