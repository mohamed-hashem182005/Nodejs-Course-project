const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Courses API",
      version: "1.0.0",
      description: "Backend API for Courses & Users with JWT Authentication",
    },

    servers: [
      {
        url: "https://nodejs-course-project-2.onrender.com/api",
        description: "Production server",
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

      schemas: {
        UserRegister: {
          type: "object",
          required: ["firstName", "lastName", "email", "password"],
          properties: {
            firstName: { type: "string", example: "Mohamed" },
            lastName: { type: "string", example: "Hashem" },
            email: { type: "string", example: "test@email.com" },
            password: { type: "string", example: "123456" },
            avatar: { type: "string", format: "binary" },
          },
        },

        UserLogin: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", example: "test@email.com" },
            password: { type: "string", example: "123456" },
          },
        },

        Course: {
          type: "object",
          required: ["title", "price"],
          properties: {
            title: { type: "string", example: "Node.js Course" },
            price: { type: "number", example: 300 },
          },
        },

        ErrorResponse: {
          type: "object",
          properties: {
            status: { type: "string", example: "error" },
            message: { type: "string", example: "Unauthorized" },
          },
        },
      },
    },
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
