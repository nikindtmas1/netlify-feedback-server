const Employee = require('../models/employeesModel');

const getAllEmployees = () => Employee.find();
const createEmployee = (data) => Employee.create(data);
const updateEmployee = (id, data) => Employee.findByIdAndUpdate(id, data);
const removeEmployee = (id) => Employee.findByIdAndRemove(id);

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    removeEmployee,
};