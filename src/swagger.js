const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tutor API',
            version: '1.0.0',
            description: 'API quản lý Users và Courses',
        },
        servers: [{ url: 'http://localhost:3000' }],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id:         { type: 'integer', example: 1 },
                        name:       { type: 'string',  example: 'Nguyen Van An' },
                        email:      { type: 'string',  example: 'an@example.com' },
                        age:        { type: 'integer', example: 22 },
                        created_at: { type: 'string',  format: 'date-time' },
                    },
                },
                UserInput: {
                    type: 'object',
                    required: ['name', 'email', 'age'],
                    properties: {
                        name:  { type: 'string',  example: 'Nguyen Van An' },
                        email: { type: 'string',  example: 'an@example.com' },
                        age:   { type: 'integer', example: 22 },
                    },
                },
                Course: {
                    type: 'object',
                    properties: {
                        id:           { type: 'integer', example: 1 },
                        title:        { type: 'string',  example: 'Lập trình Node.js' },
                        description:  { type: 'string',  example: 'Học Node.js từ cơ bản' },
                        teacher_id:   { type: 'integer', example: 1 },
                        teacher_name: { type: 'string',  example: 'Nguyen Van An' },
                        created_at:   { type: 'string',  format: 'date-time' },
                    },
                },
                CourseInput: {
                    type: 'object',
                    required: ['title'],
                    properties: {
                        title:       { type: 'string',  example: 'Lập trình Node.js' },
                        description: { type: 'string',  example: 'Học Node.js từ cơ bản' },
                        teacher_id:  { type: 'integer', example: 1 },
                    },
                },
                Error: {
                    type: 'object',
                    properties: {
                        error: { type: 'string', example: 'User not found' },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
