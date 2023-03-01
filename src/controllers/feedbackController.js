const express = require("express");
const router = express.Router();

const feedbackService = require("../services/feedbackService");

router.get("/", async (req, res) => {
  let feedbacks = await feedbackService.getAllFeedback();

  res.json(feedbacks);
});

router.get("/:id", async (req, res) => {
    let feedback = await feedbackService.getFeedbackById(req.params.id);

    res.json(feedback);
});

router.post("/", async (req, res) => {
  await feedbackService.createFeedback({ ...req.body });

  res.json({ ok: true });
});

router.delete("/:id", async (req, res) => {
    await feedbackService.deleteFeedback(req.params.id);

    res.json({ ok: true });
});

module.exports = router;
