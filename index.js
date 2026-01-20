require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const HttpStatusText = require('./Utiles/Http.status.text');
const coursesRouter = require('./routes/courses.route');
const usersRoter = require('./routes/User.route');
const path = require('path')
const helmet = require('helmet')
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(helmet());
// Routes
app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRoter)// /api/users/register or /login
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Not Found Handler
app.all(/.*/, (req, res) => {
  res.status(404).json({
    status: HttpStatusText.ERROR,
    message: "This resource is not available"
  });
});



app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.statusText || HttpStatusText.ERROR,
    message: err.message || "Something went wrong",
    code: err.statusCode || 500,
    data: null
  });
});


// DB Connection + Server Start
const startServer = async () => {
  try {
await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

startServer();
