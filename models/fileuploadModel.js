
const mongoose = require('mongoose');

const fileuploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Phonenumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const fileupload = mongoose.model('fileupload', fileuploadSchema);

module.exports = fileupload;
