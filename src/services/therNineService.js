const TherNineFeedback = require('../models/therNineModel');

const getAllTherNienFeedbacks = () => TherNineFeedback.find();
const createTherNineFeedback = (data) => TherNineFeedback.create(data);
const updateTherNineFeedback = (id, data) => TherNineFeedback.findByIdAndUpdate(id, data);
const deleteTherNineFeedback = (id) => TherNineFeedback.findByIdAndRemove(id);

module.exports = {
    getAllTherNienFeedbacks,
    createTherNineFeedback,
    updateTherNineFeedback,
    deleteTherNineFeedback,
};