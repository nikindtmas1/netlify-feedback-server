const ToshoFeedback = require('../models/toshoFeedbackModel');

const getAllToshoFeedback = () => ToshoFeedback.find();
const createToshoFeedback = (data) => ToshoFeedback.create(data);
const updateToshoFeedback = (id, data) => ToshoFeedback.findByIdAndUpdate(id, data);
const deleteToshoFeedback = (id) => ToshoFeedback.findByIdAndRemove(id);

module.exports = {
    getAllToshoFeedback,
    createToshoFeedback,
    updateToshoFeedback,
    deleteToshoFeedback,
}