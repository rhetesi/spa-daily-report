const mongoose = require('mongoose');

const SpareportSchema = mongoose.Schema({
    time: {
        type: Date,
        default: new Date().toLocaleDateString('hu-HU'),
        required: true
    },
    report: {
        type: String,
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

module.exports = mongoose.model('Spareport', SpareportSchema);

/**
 * _id: string = '';
 time: Date = new Date();
 report: string = '';
 dataLogger: User = new User();
 */