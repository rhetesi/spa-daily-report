const fsp = require('fs').promises;
const User = require('../models/user.model');
const Spadatas = require('../models/spadatas');
const Spareport = require('../models/spareport');
const Weather = require('../models/weather');
const WellnessDatas = require('../models/wellnessdatas.model');


const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`,
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {
                limit: 100
            });
        }
    }
};

(async () => {

    try {
        await User.db.dropCollection('users');
    } catch (e) {
        console.log('USERS NOT FOUND');
    }

    seedCollection(User, 'users');
    seedCollection(Spadatas, 'spadatas');
    seedCollection(Spareport, 'spareport');
    seedCollection(Weather, 'weather');
    seedCollection(WellnessDatas, 'wellnessdatas');


})();