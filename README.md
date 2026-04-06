<div align="center">

# 📚 Courses Management REST API

### A Secure, Production-Ready RESTful API for Managing Online Courses & Users

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Docs-Swagger-85EA2D?logo=swagger)](https://swagger.io/)
[![Deploy](https://img.shields.io/badge/Deployed-Render-46E3B7?logo=render)](https://nodejs-course-project-2.onrender.com)

**🌐 Live API:** [https://nodejs-course-project-2.onrender.com/api/courses](https://nodejs-course-project-2.onrender.com/api/courses)

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🚀 About The Project

**Courses Management REST API** is a secure, full-featured backend application built with **Node.js**, **Express.js**, and **MongoDB**. It provides a complete RESTful API for managing online courses and user accounts, including authentication, authorization, file uploads, and interactive API documentation via Swagger.

This project follows professional backend development practices including input validation, rate limiting, security headers, password hashing, and JWT-based authentication — making it production-ready and suitable as a real-world portfolio piece.

> 💡 This project was built to apply and consolidate backend concepts learned through a Node.js course, before advancing to more complex architectures.

---

## ✨ Features

- ✅ **Full CRUD for Courses** — Create, Read, Update, and Delete course records
- ✅ **User Authentication** — Register, login, and manage users securely
- ✅ **JWT Authorization** — Protected routes with Bearer token authentication
- ✅ **Password Hashing** — Secure password storage using `bcryptjs`
- ✅ **Input Validation** — Request data validated with `express-validator` and `validator`
- ✅ **File Uploads** — Course image/file uploads handled with `multer`
- ✅ **Rate Limiting** — API protection from abuse with `express-rate-limit`
- ✅ **Security Headers** — Hardened HTTP headers via `helmet`
- ✅ **CORS Support** — Cross-origin resource sharing enabled
- ✅ **API Documentation** — Interactive Swagger UI with `swagger-jsdoc`
- ✅ **Deployed on Render** — Live and publicly accessible

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js v5 |
| **Database** | MongoDB via Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **Password Security** | bcryptjs |
| **Validation** | express-validator, validator.js |
| **File Uploads** | Multer |
| **Rate Limiting** | express-rate-limit |
| **Security** | Helmet |
| **CORS** | cors |
| **API Docs** | swagger-jsdoc + swagger-ui-express |
| **Dev Tool** | Nodemon |
| **Config** | dotenv |
| **Deployment** | Render |

---

## 📁 Project Structure

```
Nodejs-Course-project/
│
├── controler/            # Route handler logic (business logic)
│   ├── courseController.js
│   └── userController.js
│
├── modules/              # Mongoose models & schemas
│   ├── courseModel.js
│   └── userModel.js
│
├── routes/               # Express route definitions
│   ├── courseRoutes.js
│   └── userRoutes.js
│
├── Utiles/               # Utility & helper functions
│   └── appError.js
│
├── data/                 # Seed data or static JSON files
│
├── uploads/              # Uploaded files storage
│
├── index.js              # Main application entry point
├── swagger.js            # Swagger/OpenAPI configuration
├── package.json          # Project metadata & dependencies
├── .gitignore            # Files excluded from version control
├── .env                  # Environment variables (not committed)
└── README.md             # Project documentation
```

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18` or higher
- [npm](https://www.npmjs.com/) `v9` or higher
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohamed-hashem182005/Nodejs-Course-project
```

### 2. Navigate into the project directory

```bash
cd Nodejs-Course-project
```

### 3. Install all dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) below).

### 5. Start the development server

```bash
npm run run
```

The API will be running at **http://localhost:3000**

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/courses_db
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=30d
```

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port the server listens on | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `mysecretkey123` |
| `JWT_EXPIRES_IN` | JWT token expiry duration | `30d` |

> ⚠️ **Never commit your `.env` file to version control.** It is already included in `.gitignore`.

---

## 📄 API Documentation

Interactive Swagger docs are available at:

- **Local:** `http://localhost:3000/api-docs`
- **Live:** `https://nodejs-course-project-2.onrender.com/api-docs`

---

## 🔌 API Endpoints

### 📘 Courses

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/courses` | Get all courses | ✅ Required |
| `GET` | `/api/courses/:id` | Get a single course by ID | ✅ Required |
| `POST` | `/api/courses` | Create a new course | ✅ Admin only |
| `PATCH` | `/api/courses/:id` | Update a course | ✅ Admin only |
| `DELETE` | `/api/courses/:id` | Delete a course | ✅ Admin only |

### 👤 Users

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/users/register` | Register a new user | ❌ Public |
| `POST` | `/api/users/login` | Login and get JWT token | ❌ Public |
| `GET` | `/api/users` | Get all users | ✅ Admin only |
| `GET` | `/api/users/:id` | Get a single user | ✅ Required |
| `PATCH` | `/api/users/:id` | Update user info | ✅ Required |
| `DELETE` | `/api/users/:id` | Delete a user | ✅ Admin only |

---

### Example — Get All Courses

```http
GET /api/courses
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
{
  "status": "success",
  "results": 2,
  "data": {
    "courses": [
      {
        "_id": "68c7a3e2353f0865cc09f3fa",
        "title": "Introduction to Web Development",
        "instructor": "John Doe",
        "duration": "8 weeks",
        "price": 149.99,
        "level": "Beginner"
      }
    ]
  }
}
```

### Example — Create a Course

```http
POST /api/courses
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "title": "Introduction to Web Development",
  "description": "Learn HTML, CSS, and JavaScript from scratch",
  "instructor": "John Doe",
  "duration": "8 weeks",
  "price": 149.99,
  "category": "Web Development",
  "level": "Beginner"
}
```

---

## 🔑 Authentication

This API uses **JWT (JSON Web Token)** for stateless authentication.

1. **Register** → `POST /api/users/register`
2. **Login** → `POST /api/users/login` — receive your token
3. **Use the token** in all protected requests:

```http
Authorization: Bearer <your_jwt_token>
```

Tokens expire based on the `JWT_EXPIRES_IN` environment variable (default: `30d`).

---

## 🗺 Roadmap

- [ ] 🔐 Add role-based access control (Admin / Instructor / Student)
- [ ] 📧 Add email verification on registration
- [ ] 🔁 Add refresh token support
- [ ] 📊 Add course enrollment & progress tracking
- [ ] 🧪 Add unit and integration tests (Jest / Supertest)
- [ ] 🐳 Add Docker support for containerized deployment
- [ ] 📦 Add pagination and advanced filtering on list endpoints

---

## 🤝 Contributing

Contributions are welcome and appreciated! To contribute:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** and describe your changes

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Mohamed Hashem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Mohamed Hashem**

- GitHub: [@mohamed-hashem182005](https://github.com/mohamed-hashem182005)

---

<div align="center">

⭐ **If you find this project helpful, please give it a star!** ⭐

*Built with ❤️ as part of a Node.js backend development journey.*

</div>
