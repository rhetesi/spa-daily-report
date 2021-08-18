const Model = require('../../models/spadatas.model');

exports.create = spadatasData => {
    const entity = new Model(spadatasData);
    return entity.save();
};

exports.findAll = () => Model.find().populate();

exports.findOne = id => Model.findById(id).populate();

exports.update = (id, updateData) => Model.findByIdAndUpdate(id, updateData, {
    new: true
});

exports.delete = id => Model.findByIdAndRemove(id);