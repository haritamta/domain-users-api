const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.js');

/* GET USER */
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id,  (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE USER */
router.post('/submit', (req, res, next) => {
  User.create(req.body,  (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE USER */
router.post('/update/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;