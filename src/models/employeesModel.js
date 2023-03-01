const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    title: String,
    check: Boolean,
});

module.exports = mongoose.model('Employee', employeeSchema);