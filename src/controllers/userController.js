const UserService = require('../services/userService');

const UserController = {
    getAll: async (_req, res) => {
        try {
            const users = await UserService.getAll();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getById: async (req, res) => {
        try {
            const user = await UserService.getById(req.params.id);
            res.json(user);
        } catch (err) {
            const status = err.message === 'User not found' ? 404 : 500;
            res.status(status).json({ error: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const user = await UserService.create(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    update: async (req, res) => {
        try {
            const user = await UserService.update(req.params.id, req.body);
            res.json(user);
        } catch (err) {
            const status = err.message === 'User not found' ? 404 : 400;
            res.status(status).json({ error: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            await UserService.delete(req.params.id);
            res.json({ message: 'Đã xóa thành công' });
        } catch (err) {
            const status = err.message === 'User not found' ? 404 : 500;
            res.status(status).json({ error: err.message });
        }
    },
};

module.exports = UserController;
