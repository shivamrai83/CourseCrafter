const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("../DB");
const jwt = require('jsonwebtoken');
const { SECRET, authenticateJwt } = require("../Middleware/auth")

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
    console.log('backedmmn', username, password)
   
    const admin = await User.findOne({ username, password });
    console.log('backedmmn', admin)
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

  module.exports = router;