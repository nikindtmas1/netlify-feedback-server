const express = require('express');
const router = express.Router();

const service = require('../services/therTenService');

router.get('/', async (req, res) => {
    const respons = await service.getAllTherTenFeedbacks();
    res.json(respons);
});

router.post('/', async (req, res) => {
    await service.createTherTenFeedback({...req.body});
    res.json({ ok: true });
});

router.put('/:id', async (req, res) => {
    await service.updateTherTenFeedback(req.params.id, req.body);
    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await service.deleteTherTenFeedback(req.params.id);
    res.json({ ok: true });
});

module.exports = router;