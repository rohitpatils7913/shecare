const mongoose = require('mongoose');


const EmergencySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Phonenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model('Emergency', EmergencySchema);
