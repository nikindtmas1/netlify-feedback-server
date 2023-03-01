const TherTenFeedback = require('../models/therTenModel.js');

const getAllTherTenFeedbacks = () => TherTenFeedback.find();
const createTherTenFeedback = (data) => TherTenFeedback.create(data);
const updateTherTenFeedback = (id, data) => TherTenFeedback.findByIdAndUpdate(id, data);
const deleteTherTenFeedback = (id) => TherTenFeedback.findByIdAndRemove(id);

module.exports = {
    getAllTherTenFeedbacks,
    createTherTenFeedback,
    updateTherTenFeedback,
    deleteTherTenFeedback,
};