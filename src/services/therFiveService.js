const TherFiveFeedback = require('../models/therFiveModel');

const getAllTherFiveFeedbacks = () => TherFiveFeedback.find();
const createTherFiveFeedback = (data) => TherFiveFeedback.create(data);
const deleteTherFiveFeedback = (id) => TherFiveFeedback.findByIdAndRemove(id);
const updateTherFiveFeedback = (id, data) => TherFiveFeedback.findByIdAndUpdate(id, data);

module.exports = {
    getAllTherFiveFeedbacks,
    createTherFiveFeedback,
    updateTherFiveFeedback,
    deleteTherFiveFeedback,
}