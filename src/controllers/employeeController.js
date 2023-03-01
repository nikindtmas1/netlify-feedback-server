const express = require('express');
const router = express.Router();

const service = require('../services/employeeService');

router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees();
    res.json(employees);
});

router.post('/', async (req, res) => {
    await service.createEmployee({...req.body});
    res.json({ ok: true });
});

router.put('/:id', async (req, res) => {
    await service.updateEmployee(req.params.id, req.body);
    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await service.removeEmployee(req.params.id);
    res.json({ ok: true });
});

module.exports = router;