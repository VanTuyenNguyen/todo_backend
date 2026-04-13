const EnrollmentModel = require('../models/enrollmentModel');

const EnrollmentService = {
    enroll: async ({ user_id, course_id }) => {
        if (!user_id || !course_id) throw new Error('user_id và course_id là bắt buộc');
        const already = await EnrollmentModel.isEnrolled({ user_id, course_id });
        if (already) throw new Error('User đã đăng ký khóa học này');
        return await EnrollmentModel.enroll({ user_id, course_id });
    },

    unenroll: async ({ user_id, course_id }) => {
        if (!user_id || !course_id) throw new Error('user_id và course_id là bắt buộc');
        const already = await EnrollmentModel.isEnrolled({ user_id, course_id });
        if (!already) throw new Error('User chưa đăng ký khóa học này');
        await EnrollmentModel.unenroll({ user_id, course_id });
    },

    getCoursesByUser: async (user_id) => {
        return await EnrollmentModel.getCoursesByUser(user_id);
    },

    getUsersByCourse: async (course_id) => {
        return await EnrollmentModel.getUsersByCourse(course_id);
    },
};

module.exports = EnrollmentService;
