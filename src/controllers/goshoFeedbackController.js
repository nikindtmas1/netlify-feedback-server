const express = require('express');
const router = express.Router();

const services = require('../services/goshoFeedbackService');
const {isAuth} = require('../middleware/authMidd');

router.get('/', async (req, res) => {
    const goshoFeedbacks = await services.getAllGoshoFeedback();

    res.json(goshoFeedbacks);
});

router.get('/:id', async (req, res) => {
    const result = await services.getOneFeedback(req.params.id);
    res.json(result);
});

router.post('/', async (req, res) => {
    await services.createGoshoFeedback({...req.body});

    res.json({ ok: true })
});

router.put('/:id', async (req, res) => {
    await services.updateGoshoFeedback(req.params.id, req.body);
    res.json({ ok: true })
});

router.delete('/:id',isAuth, async (req, res) => {
    await services.deleteGoshoFeedback(req.params.id);

    res.json({ ok: true })
});

module.exports = router;