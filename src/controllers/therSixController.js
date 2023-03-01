const express = require('express');
const router = express.Router();

const services = require('../services/therSixService');

router.get('/', async (req, res) => {
   const respons = await services.getAllTherSixFeedback();

   res.json(respons);
});

router.post('/', async (req, res) => {
    await services.createTherSixFeedback({...req.body});
    res.json({ ok: true });
});

router.put('/:id', async (req, res) => {
    await services.updateTherSixFeedback(req.params.id, req.body)
    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await services.deleteTherSixFeedback(req.params.id);
    res.json({ ok: true });
});

module.exports = router;