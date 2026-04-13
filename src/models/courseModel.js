const pool = require('../../db');

const CourseModel = {
    getAll: async () => {
        const result = await pool.query(`
            SELECT c.*, u.name AS teacher_name
            FROM courses c
            LEFT JOIN users u ON c.teacher_id = u.id
            ORDER BY c.id
        `);
        return result.rows;
    },

    getById: async (id) => {
        const result = await pool.query(`
            SELECT c.*, u.name AS teacher_name
            FROM courses c
            LEFT JOIN users u ON c.teacher_id = u.id
            WHERE c.id = $1
        `, [id]);
        return result.rows[0];
    },

    create: async ({ title, description, teacher_id }) => {
        const result = await pool.query(
            'INSERT INTO courses (title, description, teacher_id) VALUES ($1, $2, $3) RETURNING *',
            [title, description, teacher_id]
        );
        return result.rows[0];
    },

    update: async (id, { title, description, teacher_id }) => {
        const result = await pool.query(
            'UPDATE courses SET title=$1, description=$2, teacher_id=$3 WHERE id=$4 RETURNING *',
            [title, description, teacher_id, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        await pool.query('DELETE FROM courses WHERE id = $1', [id]);
    },
};

module.exports = CourseModel;
