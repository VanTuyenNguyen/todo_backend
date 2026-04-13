const pool = require('../../db');

const UserModel = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM users ORDER BY id');
        return result.rows;
    },

    getById: async (id) => {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    },

    create: async ({ name, email, age }) => {
        const result = await pool.query(
            'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
            [name, email, age]
        );
        return result.rows[0];
    },

    update: async (id, { name, email, age }) => {
        const result = await pool.query(
            'UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *',
            [name, email, age, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
    },
};

module.exports = UserModel;
