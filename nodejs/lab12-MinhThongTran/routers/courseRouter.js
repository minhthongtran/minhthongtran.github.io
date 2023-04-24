const express = require('express');
const Course = require('../models/course');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json(Course.getAll());
});

router.get('/:id', (req, res, next) => {
  var course = Course.findById(req.params.id);
  if (course === undefined || course === null || course === {}) {
    next(new Error('The course ' + req.params.id + ' is not existed!'));
  } else {
    res.json(Course.findById(req.params.id));
  }
});

router.post('/', (req, res, next) => {
  if (req.body == null) {
    next(new Error('New course can not be null!'));
  } else if (req.body.id == null || req.body.id == '') {
    next(new Error('Course Id can not be null or empty!'));
  } else if (req.body.name == null || req.body.name == '') {
    next(new Error('Course Name can not be null or empty!'));
  } else {
    const addedCourse = new Course(req.body.id, req.body.name).save();
    if (addedCourse === undefined || addedCourse === null || addedCourse === {}) {
      next(new Error('Error when saving new Course!'));
    } else {
      res.status(201).json(addedCourse);
    }
  }
});

module.exports = router;
