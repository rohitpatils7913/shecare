const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    user_id:String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', fileSchema);
