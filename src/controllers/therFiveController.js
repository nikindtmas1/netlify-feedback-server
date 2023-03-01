const express = require('express');
const router = express.Router();

const services = require('../services/therFiveService');

router.get('/', async (req, res) => {
    const therFiveFeedbacks = await services.getAllTherFiveFeedbacks();
    res.json(therFiveFeedbacks);
});

router.post('/', async (req, res) => {
    await services.createTherFiveFeedback({...req.body});
    res.json({ ok: true });
});

router.put('/:id', async (req, res) => {
    await services.updateTherFiveFeedback(req.params.id, req.body);
    res.json({ ok: true });
});

router.delete('/:id',async (req, res) => {
    await services.deleteTherFiveFeedback(req.params.id);
    res.json({ ok: true });
});


module.exports = router;