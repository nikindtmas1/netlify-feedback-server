const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    text: {
       type: String,
      //  required: [true, 'Text is required!']
    },
    rating: {
      type:  Number,
      // required: [true, 'Rating is required!']
    },
});

module.exports = mongoose.model('Feedback', feedbackSchema);