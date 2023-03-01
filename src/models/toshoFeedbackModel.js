const mongoose = require('mongoose');

const toshoSchema = new mongoose.Schema({
    text: {
        type: String
    },
    rating: {
        type: Number
    },
    peopleName: {
        type: String
    },
    userName: {
        type: String
    },
});

module.exports = mongoose.model("ToshoFeedback", toshoSchema);