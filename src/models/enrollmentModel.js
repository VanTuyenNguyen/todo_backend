const pool = require('../../db');

const EnrollmentModel = {
    enroll: async ({ user_id, course_id }) => {
        const result = await pool.query(
            'INSERT INTO enrollments (user_id, course_id) VALUES ($1, $2) RETURNING *',
            [user_id, course_id]
        );
        return result.rows[0];
    },

    unenroll: async ({ user_id, course_id }) => {
        await pool.query(
            'DELETE FROM enrollments WHERE user_id=$1 AND course_id=$2',
            [user_id, course_id]
        );
    },

    getCoursesByUser: async (user_id) => {
        const result = await pool.query(`
            SELECT c.*, e.enrolled_at
            FROM enrollments e
            JOIN courses c ON e.course_id = c.id
            WHERE e.user_id = $1
            ORDER BY e.enrolled_at DESC
        `, [user_id]);
        return result.rows;
    },

    getUsersByCourse: async (course_id) => {
        const result = await pool.query(`
            SELECT u.*, e.enrolled_at
            FROM enrollments e
            JOIN users u ON e.user_id = u.id
            WHERE e.course_id = $1
            ORDER BY e.enrolled_at DESC
        `, [course_id]);
        return result.rows;
    },

    isEnrolled: async ({ user_id, course_id }) => {
        const result = await pool.query(
            'SELECT id FROM enrollments WHERE user_id=$1 AND course_id=$2',
            [user_id, course_id]
        );
        return result.rows.length > 0;
    },
};

module.exports = EnrollmentModel;
