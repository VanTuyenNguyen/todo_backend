const express = require('express');
const pool = require('./db');

const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET all users
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET user by id
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST - thêm user
app.post('/users', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const result = await pool.query(
            'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
            [name, email, age]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT - sửa user
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const result = await pool.query(
            'UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *',
            [name, email, age, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE - xóa user
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id=$1', [id]);
        res.json({ message: 'Đã xóa thành công' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
