const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        default: null
    },
    otpExpire: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('User', UserSchema);
