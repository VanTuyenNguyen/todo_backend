const UserModel = require('../models/userModel');

const UserService = {
    getAll: async () => {
        return await UserModel.getAll();
    },

    getById: async (id) => {
        const user = await UserModel.getById(id);
        if (!user) throw new Error('User not found');
        return user;
    },

    create: async ({ name, email, age }) => {
        if (!name || !email || !age) throw new Error('Thiếu thông tin bắt buộc');
        if (age < 1 || age > 120) throw new Error('Tuổi không hợp lệ');
        return await UserModel.create({ name, email, age });
    },

    update: async (id, { name, email, age }) => {
        if (!name || !email || !age) throw new Error('Thiếu thông tin bắt buộc');
        if (age < 1 || age > 120) throw new Error('Tuổi không hợp lệ');
        const user = await UserModel.update(id, { name, email, age });
        if (!user) throw new Error('User not found');
        return user;
    },

    delete: async (id) => {
        await UserModel.getById(id).then(u => {
            if (!u) throw new Error('User not found');
        });
        await UserModel.delete(id);
    },
};

module.exports = UserService;
