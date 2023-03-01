const mongoose = require('mongoose');

const peshoSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model('PeshoFeedback', peshoSchema);