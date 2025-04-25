const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

// REGISTER CONTROLLER
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  try {
    await user.save();
    const token = user.generateJwt();
    return res.status(200).json({
      token,
      name: user.name,
      email: user.email
    });
  } catch (err) {
    return res.status(400).json({
      message: "Error saving user",
      error: err.message
    });
  }
};

// LOGIN CONTROLLER
const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(404).json(err);
    }

    if (user) {
      const token = user.generateJwt();
      return res.status(200).json({
        token,
        name: user.name,
        email: user.email
      });
    } else {
      return res.status(401).json(info);
    }
  })(req, res);
};

// EXPORT CONTROLLERS
module.exports = {
  register,
  login
};