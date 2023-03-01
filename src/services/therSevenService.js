const TherSevenFeedback = require('../models/therSevenModel');

const getAllTherSevenFeedback = () => TherSevenFeedback.find();
const createTherSevenFeedback = (data) => TherSevenFeedback.create(data);
const updateTherSevenFeedback = (id, data) => TherSevenFeedback.findByIdAndUpdate(id, data);
const deleteTherSevenFeedback = (id) => TherSevenFeedback.findByIdAndRemove(id);

module.exports = {
    getAllTherSevenFeedback,
    createTherSevenFeedback,
    updateTherSevenFeedback,
    deleteTherSevenFeedback,
};