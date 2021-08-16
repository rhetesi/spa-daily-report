const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    job: {
        type: String,
        default: 'not specified'
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('customer', CustomerSchema);
