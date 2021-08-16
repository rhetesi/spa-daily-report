const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    address: {
        type: String,
    },
    role: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: true
    },
    active: {
        type: string,
    },
    password: {
        type: string,
    },
    accessToken: {
        type: string,
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);