const express = require('express');
const router = express.Router();
const coursecontloer = require('../controler/courses.controler');
const validationSchema = require('./middleware/middelwareSchema');
const verifyToken = require('./middleware/verfayToken');
const roles = require('../Utiles/rolles');
const allowTo = require('./middleware/allowTo');




//get all courses
//Route ===< Resourse

router.route('/')
                    .get(coursecontloer.getAllCourses)
                    .post( verifyToken,validationSchema(),coursecontloer.addCourse)

//get sigle course by id
// get, update, delete single course by id

router.route('/:courseId')
                .get(coursecontloer.getSingleCourse)
                .patch(verifyToken,allowTo(roles.admin,roles.manger), coursecontloer.updateCourse) 
                .delete(verifyToken,allowTo(roles.admin,roles.manger),coursecontloer.deleteCourse)


module.exports=router;