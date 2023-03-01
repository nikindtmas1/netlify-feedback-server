const TherSixFeedback = require('../models/therSixModel');

const getAllTherSixFeedback = () => TherSixFeedback.find();
const createTherSixFeedback = (data) => TherSixFeedback.create(data);
const updateTherSixFeedback = (id, data) => TherSixFeedback.findByIdAndUpdate(id, data);
const deleteTherSixFeedback = (id) => TherSixFeedback.findByIdAndRemove(id);


module.exports = {
    getAllTherSixFeedback,
    createTherSixFeedback,
    updateTherSixFeedback,
    deleteTherSixFeedback
};