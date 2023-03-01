const mongoose = require('mongoose');

const therSevenSchema = new mongoose.Schema({
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

module.exports = mongoose.model('TherSevenFeedback', therSevenSchema);