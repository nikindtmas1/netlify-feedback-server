const express = require('express');
const router = express.Router();

const services = require('../services/therSevenService');

router.get('/', async (req, res) => {
    const respons = await services.getAllTherSevenFeedback();
    res.json(respons);
});

router.post('/', async (req, res) => {
    await services.createTherSevenFeedback({...req.body});
    res.json({ ok: true });
});

router.put('/:id', async (req, res) => {
    await services.updateTherSevenFeedback(req.params.id, req.body);
    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await services.deleteTherSevenFeedback(req.params.id);
    res.json({ ok: true });
});

module.exports = router;