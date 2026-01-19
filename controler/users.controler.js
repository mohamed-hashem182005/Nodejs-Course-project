const asyncWraper = require("../routes/middleware/async.Wraper");
const model = require('../modules/User.model');
const HttpStatusText = require('../Utiles/Http.status.text');
const AppError = require("../Utiles/app.error");
const bcrypt = require('bcryptjs');
require("dotenv").config();
const token = require('../Utiles/generate.JWT')

const jwt = require('jsonwebtoken');
const generateJWT = require("../Utiles/generate.JWT");


// get all users
const getAllUsers = asyncWraper(async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const skip = (page - 1) * limit;

  const users = await model.find({}, { __v: false, password: false })
    .limit(limit)
    .skip(skip);

  res.json({ status: HttpStatusText.SUCCESS, data: { users } });
});

// register
const Register = asyncWraper(async (req, res, next) => {
  const { firstName, lastName, email, password,role } = req.body;

  // check if user exists
  const oldUser = await model.findOne({ email });
  if (oldUser) {
    return next(new AppError("User already exists", 400, "fail"));
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new model({
    firstName,
    lastName,
    email,
    password: hashPassword,
    role,
    avatar:req.file.filename
  });

  //generate JWT token
  const token =await generateJWT({email:newUser.email,id:newUser._id,role:newUser.role})


  await newUser.save();


  res.json({ status: HttpStatusText.SUCCESS, data: { newUser } });
});

// login
const Login = asyncWraper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Email and password are required", 400, "fail"));
  }

  const user = await model.findOne({ email }).select('+password');
  if (!user) {
   
    return next(new AppError("User not found", 404, "fail"));
  }

  const matchedPassword = await bcrypt.compare(password, user.password);
  if (!matchedPassword) {
    return next(new AppError("Invalid email or password", 401, "fail"));
  }
 const token =await generateJWT({email:user.email,id:user._id,role:user.role})
  
  res.json(
    {
    status: HttpStatusText.SUCCESS,
    data: { token: token }
  });
});

module.exports = {
  getAllUsers,
  Register,
  Login
};
