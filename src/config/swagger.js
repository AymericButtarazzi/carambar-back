const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar & Co - API de Blagues',
      version: '1.0.0',
      description: 'Une API pour gérer et afficher des blagues',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
