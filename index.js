require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });
const express = require('express');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const enrollmentRoutes = require('./src/routes/enrollmentRoutes');
const setupSwagger = require('./src/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);

setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
});
