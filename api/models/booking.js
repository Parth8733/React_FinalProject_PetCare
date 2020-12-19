const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  petName: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  },
  hour: {
    type: String,
    required: true
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);