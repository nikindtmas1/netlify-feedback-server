const Feedback = require("../models/feedbackModel");

const getAllFeedback = () => Feedback.find();
const createFeedback = (data) => Feedback.create(data);
const getFeedbackById = (id) => Feedback.findById(id);
const deleteFeedback = (id) => Feedback.findByIdAndRemove(id);

module.exports = {
  getAllFeedback,
  createFeedback,
  getFeedbackById,
  deleteFeedback,
};
