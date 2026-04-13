const EnrollmentService = require('../services/enrollmentService');

const EnrollmentController = {
    enroll: async (req, res) => {
        try {
            const result = await EnrollmentService.enroll(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    unenroll: async (req, res) => {
        try {
            await EnrollmentService.unenroll(req.body);
            res.json({ message: 'Hủy đăng ký thành công' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    getCoursesByUser: async (req, res) => {
        try {
            const courses = await EnrollmentService.getCoursesByUser(req.params.user_id);
            res.json(courses);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getUsersByCourse: async (req, res) => {
        try {
            const users = await EnrollmentService.getUsersByCourse(req.params.course_id);
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = EnrollmentController;
