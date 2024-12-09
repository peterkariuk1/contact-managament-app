# Contact Management App
A full-featured Contact Management Application built with Express.js, MongoDB, and Mongoose. This project implements REST API conventions, secure user authentication using JWT, and CRUD operations for managing user-specific contacts.

# 🚀 Features
# User Authentication:
User registration with password hashing.
Login with JWT-based access tokens.
Protected routes with JWT verification.

# Contact Management:
Create, Read, Update, and Delete contacts.
User-specific contact access and management.

# Error Handling:
Built-in middleware for structured error responses.

# REST API Architecture:
Organized routes and controllers for modular code structure.

# 🛠️ Tech Stack
Backend: Express.js, Node.js
Database: MongoDB (Mongoose ORM)
Authentication: JWT (JSON Web Tokens)
Testing: Postman

# 📂 Folder Structure
📦 Contact Management App
 ┣ 📂 controllers
 ┃ ┣ 📜 contactController.js
 ┃ ┗ 📜 userController.js
 ┣ 📂 models
 ┃ ┣ 📜 contactModel.js
 ┃ ┗ 📜 userModel.js
 ┣ 📂 routes
 ┃ ┣ 📜 contactRoutes.js
 ┃ ┗ 📜 userRoutes.js
 ┣ 📜 .env
 ┣ 📜 app.js
 ┣ 📜 server.js
 ┗ 📜 README.md

 
# 🔧 Setup & Usage
Prerequisites
Node.js
MongoDB (cloud-based)

# Installation
# Clone the repository:
git clone <repository-url>
cd contact-management-app

# Install dependencies:
npm install

# Create a .env file in the root directory and set the following variables:
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

# Start the server:
npm run dev

# API Endpoints
Method	Endpoint	Description
POST	/api/users/register	=> Register a new user
POST	/api/users/login	=> Login and get an access token
GET	/api/contacts	=> Get all contacts (logged-in user)
POST	/api/contacts	=> Create a new contact
GET	/api/contacts/:id	=> Get a specific contact by ID
PUT	/api/contacts/:id	=> Update a contact by ID
DELETE	/api/contacts/:id	=> Delete a contact by ID


# 📜 Lessons Learned
REST API conventions for building scalable applications.
Setting up and using middleware in Express.js.
Implementing secure user authentication using JWT.
Structuring an Express application with routers and controllers.
Managing database relationships and schema validation with Mongoose.

🛡️ License
This project is licensed under the MIT License. See the LICENSE file for details.
