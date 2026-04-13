const CourseModel = require('../models/courseModel');

const CourseService = {
    getAll: async () => {
        return await CourseModel.getAll();
    },

    getById: async (id) => {
        const course = await CourseModel.getById(id);
        if (!course) throw new Error('Course not found');
        return course;
    },

    create: async ({ title, description, teacher_id }) => {
        if (!title) throw new Error('Tiêu đề không được để trống');
        return await CourseModel.create({ title, description, teacher_id });
    },

    update: async (id, { title, description, teacher_id }) => {
        if (!title) throw new Error('Tiêu đề không được để trống');
        const course = await CourseModel.update(id, { title, description, teacher_id });
        if (!course) throw new Error('Course not found');
        return course;
    },

    delete: async (id) => {
        const course = await CourseModel.getById(id);
        if (!course) throw new Error('Course not found');
        await CourseModel.delete(id);
    },
};

module.exports = CourseService;
