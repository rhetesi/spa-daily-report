const mongoose = require('mongoose');

const WellnessDatasSchema = mongoose.Schema({
    time: {
        type: Date,
        default: new Date().toLocaleDateString('hu-HU'),
        required: true
    },
    massage: {
        type: Number,
        required: true
    },
    pediAndManiCure: {
        type: Number,
        required: true
    },
    cosmetics: {
        type: Number,
        required: true
    },
    medicaExamination: {
        type: Number,
        required: true
    },
    mudSale: {
        type: Number,
        required: true
    },
    mudTreatment: {
        type: Number,
        required: true
    },
    weightBath: {
        type: Number,
        required: true
    },
    phisioTherapy: {
        type: Number,
        required: true
    },
    dataLogger: {
        type: String,
        required: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('WellnessDatas', WellnessDatasSchema);


/*
_id: string = '';
time: Date = new Date();
massage: number = 0;
pediAndManiCure: number = 0;
cosmetics: number = 0;
medicaExamination: number = 0;
mudSale: number = 0;
mudTreatment: number = 0;
weightBath: number = 0;
phisioTherapy: number = 0;
dataLogger: User = new User();
*/