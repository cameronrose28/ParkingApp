const mongoose = require("mongoose");

const ReservedSchema = new mongoose.Schema({
  spotid: {
    type: String,
    required: true
  },
  datestart: {
    type: Date,
    required: true
  },
  dateend: {
    type: Date,
    required: true
  },
});

const Reserved = mongoose.model("Reserved", ReservedSchema);

module.exports = Reserved;
