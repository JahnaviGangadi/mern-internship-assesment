MERN Intern Assessment - User Registration and Profile Card Application
=========================================================================

Project Overview
----------------
This project is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, and view their profile information. It includes user authentication using JWT and password encryption with bcrypt.

Features:
---------
- User Registration with name, email, and password
- Login authentication using JWT
- Protected profile route displaying user name and email
- Logout functionality to end the session
- Basic error handling and validation

Project Structure
-----------------
The project is organized into two main directories:

1. backend/
   - index.js              --> Entry point for the Express server
   - .env                  --> Environment variables (MongoDB URI, JWT secret, PORT)
   - models/
       - User.js           --> Mongoose schema for user data
   - routes/
       - auth.js           --> API routes for registration, login, and profile retrieval
   - package.json          --> Dependencies and scripts for the backend

2. frontend/
   - public/
       - index.html        --> Main HTML file that hosts the React app
       - manifest.json     --> Web app manifest for Progressive Web App (PWA) features
       - robots.txt        --> Instructions for web crawlers
       - (favicon.ico, logo192.png, logo512.png) --> Image assets
   - src/
       - index.js          --> React app entry point
       - index.css         --> Global styles (create this file if it doesn't exist)
       - App.js            --> Main component with routing setup
       - components/
           - Register.js   --> Registration form component
           - Login.js      --> Login form component
           - Profile.js    --> Profile card component
   - package.json          --> Dependencies and scripts for the frontend

Prerequisites
-------------
- Node.js and npm installed on your machine.
- MongoDB running locally (or update the MONGO_URI in the backend/.env file to point to your MongoDB instance).

Setup Instructions
------------------
1. Backend Setup:
   a. Navigate to the backend folder:
      cd backend
   b. Install dependencies:
      npm install
   c. Create a .env file in the backend folder with the following contents (update values as needed):

      MONGO_URI=mongodb://localhost:27017/mern_intern
      JWT_SECRET=jwt_secret
      PORT=5000

   d. Start the backend server:
      npm start
      (For development with live reloading, use: npm run dev)

2. Frontend Setup:
   a. Navigate to the frontend folder:
      cd frontend
   b. Install dependencies:
      npm install
   c. Create an "index.css" file in the src directory if it does not exist.
   d. Start the React application:
      npm start

3. Usage:
   - Open your browser and navigate to http://localhost:3000.
   - Register a new user by visiting the registration page.
   - Log in with your registered credentials.
   - Upon successful login, view the user profile card displaying your name and email.
   - Use the logout option to end your session.

Additional Notes
----------------
- Ensure your MongoDB instance is running before starting the backend server.
