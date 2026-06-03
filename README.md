# employees_dataset_hetavi_panchotia# Employee Management Analytics API

## Overview

Employee Management Analytics API is a backend application built using Node.js, Express.js, MongoDB, and Mongoose. The project provides a complete employee management system with support for CRUD operations, advanced filtering, searching, sorting, pagination, authentication, analytics, and statistics generation.

The API is designed using MVC architecture and follows industry-standard backend development practices.

---

## Features

### Employee Management

* Create employee records
* Fetch all employees
* Fetch employee by ID
* Update employee details
* Delete employee records
* Bulk employee operations

### Search & Filtering

* Search employees by keyword
* Filter employees by:

  * Country
  * State
  * City
  * Domain
  * Skills
  * Certifications
  * Experience
  * Timezone
  * Verification status

### Sorting

* Sort employees by:

  * Name
  * Experience
  * Country
  * State
  * City
  * Skills
  * Certifications
  * Updated date

### Pagination

* Configurable page and limit support
* Efficient large dataset handling

### Authentication & Authorization

* User registration
* User login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* Role-based access control

### Analytics

* Top skills analysis
* Domain distribution
* Certification analysis
* Project analysis
* Task analysis
* Experience distribution
* Country and state analysis
* Timezone distribution

### Statistics

* Total employee count
* Average experience
* Project count
* Task count
* Domain count
* Certification count
* Verification count

### Middleware

* Authentication middleware
* Authorization middleware
* Validation middleware
* Request logger middleware
* Global error handler
* Request timing middleware

---

## Technology Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt

### Utilities

* dotenv
* cors
* morgan
* express-validator

---

## Project Structure

```text
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── employeeController.js
│   ├── authController.js
│   └── analyticsController.js
│
├── services/
│   ├── employeeService.js
│   ├── authService.js
│   └── analyticsService.js
│
├── models/
│   ├── Employee.js
│   └── User.js
│
├── routes/
│   ├── employeeRoutes.js
│   ├── authRoutes.js
│   └── analyticsRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   ├── loggerMiddleware.js
│   ├── validationMiddleware.js
│   └── errorMiddleware.js
│
├── utils/
│   ├── filterBuilder.js
│   ├── pagination.js
│   └── apiResponse.js
│
├── validations/
│
├── app.js
└── server.js
```

---

## Database Schema Overview

### Employee

```json
{
  "id": "E00001",
  "name": "Geoffrey Zimmerman",
  "profile": {
    "contact": {
      "email": "example@email.com",
      "phone": "+1-123456789",
      "address": {
        "street": "Street Name",
        "city": "City",
        "location": {
          "state": "State",
          "country": "Country",
          "geo": {
            "lat": "0.000",
            "long": "0.000",
            "timezone": {
              "name": "America/Denver",
              "utc_offset": "-07:00"
            }
          }
        }
      }
    },
    "projects": []
  }
}
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd employee-management-analytics-api
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d
```

### Run Development Server

```bash
npm run dev
```

### Run Production Server

```bash
npm start
```

---

## API Endpoints

### Employee Routes

```http
GET    /employees
GET    /employees/:id
POST   /employees
PATCH  /employees/:id
DELETE /employees/:id
```

### Search

```http
GET /search/employees?q=java
```

### Authentication

```http
POST /auth/register
POST /auth/login
GET  /auth/profile
```

### Analytics

```http
GET /analytics/employees/top-skills
GET /analytics/employees/top-domains
GET /analytics/employees/country-analysis
GET /analytics/employees/experience-analysis
```

---

## Query Features

### Filtering

```http
GET /employees?country=USA

GET /employees?state=RI

GET /employees?domain=Cloud

GET /employees?primarySkill=Java
```

### Sorting

```http
GET /employees?sort=name

GET /employees?sort=experience
```

### Pagination

```http
GET /employees?page=1&limit=10
```

### Combined Query

```http
GET /employees?country=USA&domain=Cloud&sort=experience&page=1&limit=10
```

---

## Authentication Flow

### Register

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

Returns:

```json
{
  "success": true,
  "token": "jwt-token"
}
```

### Protected Routes

Include JWT token:

```http
Authorization: Bearer <token>
```

---

## Error Handling

Standard API response structure:

```json
{
  "success": false,
  "message": "Employee not found",
  "error": {}
}
```

---

## Performance Optimizations

Implemented:

* MongoDB Indexing
* Pagination
* Query Filtering
* Aggregation Pipelines
* Optimized Search
* Projection Support

---

## Postman Documentation



---

## Author

**Hetavi Panchotia**

Full Stack Development Project – 2026

Node.js | Express.js | MongoDB | Mongoose | JWT Authentication
