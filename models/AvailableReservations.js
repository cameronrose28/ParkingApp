const mongoose = require("mongoose");

const AvailableReservationsSchema = new mongoose.Schema({
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

const AvailableReservations = mongoose.model("AvailableReservations", AvailableReservationsSchema);

module.exports = AvailableReservations;
