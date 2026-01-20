📚 مجموعة واجهة برمجة تطبيقات الدورات التدريبية
نظرة عامة
توفر واجهة برمجة تطبيقات الدورات التدريبية منصة شاملة لإدارة الدورات التعليمية وحسابات المستخدمين. تتيح لك واجهة برمجة التطبيقات RESTful هذه تنفيذ عمليات CRUD الكاملة (الإنشاء والقراءة والتحديث والحذف) على الدورات التدريبية، بالإضافة إلى إمكانيات تسجيل المستخدمين والمصادقة وإدارة المعلومات.
الميزات الرئيسية
إدارة الدورات التدريبية: إنشاء واسترجاع وتحديث وحذف الدورات
إدارة المستخدمين: تسجيل مستخدمين جدد والمصادقة واسترجاع معلومات المستخدم
تصميم RESTful: أساليب HTTP قياسية ورموز الحالة
تنسيق JSON: جميع الطلبات والاستجابات تستخدم تنسيق JSON

https://nodejs-course-project-2.onrender.com/api/courses (get_all_Courses)   


Get All Courses
Retrieves a complete list of all courses available in the system.
Request Details
Method: GET
Endpoint: {{base_url}}/api/courses
Authentication: Required (Bearer token)

Query Parameters
This endpoint supports optional query parameters for filtering and pagination:
page (optional): Page number for pagination
limit (optional): Number of courses per page
sort (optional): Sort field (e.g., title, createdAt)

Response Format
Returns a JSON object with status and course data:

JSON

{
  "status": "success",
  "data": {
    "courses": [
      {
        "_id": "course_id",
        "title": "Course Title"
        } 
}


Use Cases
Display all available courses in a course catalog
Retrieve course listings for administrative dashboards
Export course data for reporting purposes
Populate dropdown menus or selection lists

Status Codes
200 OK: Successfully retrieved courses
401 Unauthorized: Missing or invalid authentication token
500 Internal Server Error: Server error occurred

  GET
Get_single_course  {{URl}}/api/courses/68cb75ce194b3d493e9c5501
Get Single Course
Retrieves detailed information about a specific course by its unique identifier.
Request Details
Method: GET
Endpoint: {{base_url}}/api/courses/{id}
Authentication: Required (Bearer token)

Path Parameters
id (required): The unique identifier of the course to retrieve
Type: String (MongoDB ObjectId format)
Example: 68c7a3e2353f0865cc09f3fa


Response Format
Returns a JSON object with the course details:


JSON



{
  "status": "success",
  "data": {
    "course": {
      "_id": "68c7a3e2353f0865cc09f3fa",
      "title": "Course Title"
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  }
}


Use Cases
Display full course details on a course page
Retrieve course information for editing
Verify course existence before enrollment
Fetch course data for analytics

Status Codes
200 OK: Successfully retrieved the course
401 Unauthorized: Missing or invalid authentication token
404 Not Found: Course with specified ID does not exist
500 Internal Server Error: Server error occurred
  
/api/courses      (POST
Add_Course)


Add New Course
Creates a new course in the system with the provided information.
Request Details
Method: POST
Endpoint: {{base_url}}/api/courses
Authentication: Required (Bearer token with admin privileges)
Content-Type: application/json

Request Body
All fields are required unless marked as optional:


JSON








{
  "title": "Introduction to Web Development",
  "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript",
  "instructor": "John Doe",
  "duration": "8 weeks",
  "price": 149.99,
  "category": "Web Development",
  "level": "Beginner",
  "prerequisites": "None" // optional
}


Required Fields
title: Course title (string, 3-200 characters)
description: Detailed course description (string)
instructor: Name of the course instructor (string)
duration: Course duration (string, e.g., "8 weeks", "40 hours")

Optional Fields
price: Course price (number)
category: Course category (string)
level: Difficulty level (string: Beginner, Intermediate, Advanced)
prerequisites: Required knowledge or courses (string)

Response Format
Returns the newly created course with generated ID:


JSON








{
  "status": "success",
  "data": {
    "course": {
      "_id": "generated_course_id",
      "title": "Introduction to Web Development",
      "description": "Learn the fundamentals...",
      "instructor": "John Doe",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  }
}


Status Codes
201 Created: Course successfully created
400 Bad Request: Invalid or missing required fields
401 Unauthorized: Missing or invalid authentication token
403 Forbidden: User lacks admin privileges
500 Internal Server Error: Server error occurred




    
