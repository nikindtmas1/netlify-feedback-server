const express = require("express");
const router = express.Router();
const { isGuest } = require("../middleware/authMidd");

const service = require("../services/userService");


router.post("/register",isGuest, async (req, res) => {
  const { username, password } = req.body;
  try {
    const { user, accessToken, refreshToken } = await service.register({
      username,
      password,
    });
    res.json({
      _id: user._id,
      username: user.username,
      accessToken,
      refreshToken,
    });
  } catch (error) {}
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const { user, accessToken, refreshToken } = await service.login({
    username,
    password,
  });
  // req.user = accessToken;
  res.json({
    _id: user._id,
    username: user.username,
    accessToken,
    refreshToken,
  });
});

router.post('/refresh', async (req, res) => {
  // console.log(req.body);
  let refreshToken = req.body.refreshToken;

  let { accessToken, refreshToken: newRefreshToken } = await service.refresh(refreshToken);

  res.json({
      accessToken,
      refreshToken: newRefreshToken,
  });
});

router.get("/logout", (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
