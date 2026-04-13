const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/enrollmentController');

/**
 * @swagger
 * tags:
 *   name: Enrollments
 *   description: Quản lý đăng ký khóa học
 */

/**
 * @swagger
 * /enrollments:
 *   post:
 *     summary: Đăng ký khóa học
 *     tags: [Enrollments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [user_id, course_id]
 *             properties:
 *               user_id:  { type: integer, example: 1 }
 *               course_id: { type: integer, example: 2 }
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 *       400:
 *         description: Lỗi dữ liệu
 */
router.post('/', EnrollmentController.enroll);

/**
 * @swagger
 * /enrollments:
 *   delete:
 *     summary: Hủy đăng ký khóa học
 *     tags: [Enrollments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [user_id, course_id]
 *             properties:
 *               user_id:  { type: integer, example: 1 }
 *               course_id: { type: integer, example: 2 }
 *     responses:
 *       200:
 *         description: Hủy thành công
 *       400:
 *         description: Lỗi dữ liệu
 */
router.delete('/', EnrollmentController.unenroll);

/**
 * @swagger
 * /enrollments/user/{user_id}:
 *   get:
 *     summary: Lấy danh sách khóa học của user
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get('/user/:user_id', EnrollmentController.getCoursesByUser);

/**
 * @swagger
 * /enrollments/course/{course_id}:
 *   get:
 *     summary: Lấy danh sách user đã đăng ký khóa học
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: course_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get('/course/:course_id', EnrollmentController.getUsersByCourse);

module.exports = router;
