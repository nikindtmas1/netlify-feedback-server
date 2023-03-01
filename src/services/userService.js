const User = require("../models/userLoginModel");
const jwt = require('jsonwebtoken');

const { createAccessToken, createRefreshToken } = require("../utils/jwtUtils");
const { genHashPassword, verifyPass } = require("../utils/bcriptUtils");

const { development } = require('../config/config');

const secretAccess = development.secretStr;
const secretAccessTwo = development.secretStrTwo;

exports.login = async ({ username, password }) => {
  const currUser = username;
  const currPass = password;

  const user = await User.findByUsername(currUser);
  // const user = await User.findOne({currUser, currPass});

  if (!user) throw new Error("Invalid username!");
  const valide = await verifyPass(currPass, user.password);
  if (!valide) throw new Error("Invalid password!");
  // if(user.password !== currPass) throw new Error("Invalid password!");

  if (user.username === currUser) {
    const accessToken = await createAccessToken(user);
    const refreshToken = await createRefreshToken(user);

    // user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    await user.save();

    return { user, accessToken, refreshToken };
  }
};

exports.register = async ({ username, password }) => {
  const currUser = username;
  const currPass = password;

  const user = await User.findByUsername(currUser);

  if (!user) {
    const hashPassword = await genHashPassword(currPass);
    const username = currUser;
    const password = hashPassword;
    const user = new User({ username, password });
    await user.save();
   
  }
};


exports.refresh = async (refreshToken) => {
  let { _id } = jwt.verify(refreshToken, secretAccessTwo);

  let user = await User.find({ _id, refreshToken });

  if (user) {
      let accessToken = jwt.sign({ _id: user._id, username: user.username }, secretAccess, { expiresIn: '1m' });
      let refreshToken = jwt.sign({ _id: user._id }, secretAccessTwo, { expiresIn: '7d' });

      return { accessToken, refreshToken };
  } else {
      return null;
  }
}

