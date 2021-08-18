const mongoose = require('mongoose');
const userModel = require('./user.model');

const SpadatasSchema = mongoose.Schema({
    time: {
        type: Date,
        default: new Date().toLocaleDateString('hu-HU'),
        required: true
    },
    sumOfGuests: {
        type: Number,
        required: true
    },
    sumOfSauna: {
        type: Number,
        required: true
    },
    dataLogger: {
        type: String,
        // default: new userModel(),
        required: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Spadatas', SpadatasSchema);

/**
 * _id: string = '';
 time: Date = new Date();
 sumOfGuests: number = 0;
 sumOfSauna: number = 0;
 dataLogger: User = new User();
 */