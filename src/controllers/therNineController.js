const express = require('express');
const router = express.Router();

const therNineService = require('../services/therNineService');

router.get('/', async (req, res) => {
    const response = await therNineService.getAllTherNienFeedbacks();
    res.json(response);
});

router.post('/', async (req, res) => {
    await therNineService.createTherNineFeedback({...req.body});
    res.json({ ok: true });
});

router.put('/:id', async (req, res) => {
    await therNineService.updateTherNineFeedback(req.params.id, req.body);
    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await therNineService.deleteTherNineFeedback(req.params.id);
    res.json({ ok: true });
});

module.exports = router;