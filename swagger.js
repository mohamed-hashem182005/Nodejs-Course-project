const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Courses API",
      version: "1.0.0",
      description: "API documentation for Courses & Users application",
    },
    servers: [
      {
        url: "https://nodejs-course-project-2.onrender.com/api",
        description: "Production server",
      },
      {
        url: "http://localhost:3000/api",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"], // Swagger هيقرأ التعليقات من ملفات routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
