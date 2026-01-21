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
/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Courses management
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Courses fetched successfully
 */
router.get("/", coursecontloer.getAllCourses);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created successfully
 */
router.post("/", verifyToken, validationSchema(), coursecontloer.addCourse);

/**
 * @swagger
 * /courses/{courseId}:
 *   get:
 *     summary: Get course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course found
 *       404:
 *         description: Course not found
 */
router.get("/:courseId", coursecontloer.getSingleCourse);

/**
 * @swagger
 * /courses/{courseId}:
 *   patch:
 *     summary: Update course
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated
 */
router.patch("/:courseId", coursecontloer.updateCourse);

/**
 * @swagger
 * /courses/{courseId}:
 *   delete:
 *     summary: Delete course (Admin / Manager only)
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course deleted
 */
router.delete(
  "/:courseId",
  verifyToken,
  allowTo(roles.admin, roles.manger),
  coursecontloer.deleteCourse
);
