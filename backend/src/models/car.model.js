const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    maker: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Car', CarSchema);
