const express = require('express');
const Course = require('../models/course');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json(Course.getAll());
});

router.get('/:id', (req, res, next) => {
  res.json(Course.findById(req.params.id));
});

router.post('/', (req, res, next) => {
  const addedCourse = new Course(req.body.id, req.body.name).save();
  res.status(201).json(addedCourse);
});

module.exports = router;
