const TherEightFeedback = require('../models/therEightModel');

const getAllTherEightFeedbacks = () => TherEightFeedback.find();
const createTherEightFeedback = (data) => TherEightFeedback.create(data);
const updateTherEightFeedback = (id, data) => TherEightFeedback.findByIdAndUpdate(id, data);
const deleteTherEightFeedback = (id) => TherEightFeedback.findByIdAndDelete(id);

module.exports = {
    getAllTherEightFeedbacks,
    createTherEightFeedback,
    updateTherEightFeedback,
    deleteTherEightFeedback,
};