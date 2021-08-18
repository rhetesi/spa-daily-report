const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
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
    password: {
        type: String,
    },
    accessToken: {
        type: String,
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);