const { body, validationResult } = require('express-validator');
const Course = require('../modules/course.model');
const Httpstatustext = require('../Utiles/Http.status.text');
const asyncWrapper = require('../routes/middleware/async.Wraper');
const appError = require('../Utiles/app.error');


const getAllCourses = asyncWrapper(async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const skip = (page - 1) * limit;
  const courses = await Course.find({}, { __v: false }).limit(limit).skip(skip);
  res.json({ status: Httpstatustext.SUCCESS, data: { courses } });
});

const getSingleCourse = asyncWrapper(async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) {
    return next(appError.create("Course Not Found", 404, Httpstatustext.FAIL));
  }
  res.json({ status: Httpstatustext.SUCCESS, data: { course } });
});

const addCourse = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(appError.create(errors.array(), 400, Httpstatustext.FAIL));
  }
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.status(201).json({ status: Httpstatustext.SUCCESS, data: { newCourse } });
});

const updateCourse = asyncWrapper(async (req, res, next) => {
  const course = await Course.updateOne(
    { _id: req.params.courseId },
    { $set: { ...req.body } }
  );
  res.status(200).json({ status: Httpstatustext.SUCCESS, data: { course } });
});

const deleteCourse = asyncWrapper(async (req, res, next) => {
  const deleted = await Course.deleteOne({ _id: req.params.courseId });
  res.status(200).json({ status: Httpstatustext.SUCCESS, data: { deleted } });
});

module.exports = {
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  addCourse,
};
