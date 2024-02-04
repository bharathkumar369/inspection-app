# Full Stack Inspection Form Project

This project is a full-stack web application for handling inspection forms. It includes a signup/login system, and a form submission feature. The backend is built with Node.js, Express, and MongoDB, while the frontend is created with REACTJS,CSS,JS.

## Features
- **User Authentication:** Implement a signup and login system for inspectors.
- **Home Page:** Displays a comprehensive inspection form for inspectors to fill out.
- **Form Submission:** Submitted inspection forms are stored in a MongoDB database.
- **Form Details Page:** View detailed information about previously submitted forms.

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - MongoDB (mongoose)

- **Frontend:**
  - ReactJS
  - CSS
  - JS
  - HTML

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project folder: `cd your-repository`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open the application in your browser: `http://localhost:3000`
6. To start server app: `npx nodemon server.js`

## Configuration

1. Create a `.env` file in the server of your project.
2. Add the following environment variables:
   ```env
   VITE_PASSWORD=your_mongodb_password
