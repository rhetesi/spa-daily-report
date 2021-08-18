const mongoose = require('mongoose');

const WeatherSchema = mongoose.Schema({
    time: {
        type: Date,
        default: new Date().toLocaleDateString('hu-HU'),
        required: true
    },
    waterInside: {
        type: Number,
        default: 0,
        required: true
    },
    waterOutside: {
        type: Number,
        default: 0,
        required: true
    },
    airMin: {
        type: Number,
        default: 0,
        required: true
    },
    airMax: {
        type: Number,
        default: 0,
        required: true
    },
    weatherCondition: {
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

module.exports = mongoose.model('Weather', WeatherSchema);

/**
 * _id: string = '';
 time: Date = new Date();
 waterInside: number = 0;
 waterOutside: number = 0;
 airMin: number = 0;
 airMax: number = 0;
 weatherCondition: string = '';
 dataLogger: User = new User();
 */