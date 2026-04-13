const CourseService = require('../services/courseService');

const CourseController = {
    getAll: async (_req, res) => {
        try {
            const courses = await CourseService.getAll();
            res.json(courses);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getById: async (req, res) => {
        try {
            const course = await CourseService.getById(req.params.id);
            res.json(course);
        } catch (err) {
            const status = err.message === 'Course not found' ? 404 : 500;
            res.status(status).json({ error: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const course = await CourseService.create(req.body);
            res.status(201).json(course);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    update: async (req, res) => {
        try {
            const course = await CourseService.update(req.params.id, req.body);
            res.json(course);
        } catch (err) {
            const status = err.message === 'Course not found' ? 404 : 400;
            res.status(status).json({ error: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            await CourseService.delete(req.params.id);
            res.json({ message: 'Đã xóa thành công' });
        } catch (err) {
            const status = err.message === 'Course not found' ? 404 : 500;
            res.status(status).json({ error: err.message });
        }
    },
};

module.exports = CourseController;
