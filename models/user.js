const mongoose = require('mongoose');

// defining database schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sensorData: {
        type: String,
        required: false,
    },
    sensorDay: {
        type: Date,
        required: false,
    },
    comments: {
        type: String,
        required: false,
    },
});

// exporting database model
module.exports = mongoose.model('User', userSchema);