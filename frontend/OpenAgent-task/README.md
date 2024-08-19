# Contact Us Application

This is a full-stack application with a React frontend and Node.js backend that allows users to submit contact forms and view submitted data.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and npm](https://nodejs.org/)
* You have a MongoDB account and a connection string (this is provided in the email submission)

## Setting up the project

Clone the repository to your local machine:
git clone <repository-url>
cd <project-directory>


### Backend Setup
1. Navigate to the backend folder:
cd backend

2. Install the required dependencies:
npm install

3. Create a .env file in the backend directory and add your MongoDB connection string:
DATABASE_URL=your_mongodb_connection_string (this is provided in the email submission)

4. Start the backend server:
nodemon server.js

The server should now be running on http://localhost:3001

### Frontend Setup
1. Open a new terminal window and navigate to the frontend folder:
cd frontend/OpenAgent-task

2. Install the required dependencies:
npm install

3. Start the frontend development server:
npm run dev

The frontend should now be accessible at http://localhost:5173 (or another port if 5173 is in use)

## Using the Application

1. Open your web browser and go to http://localhost:5173
2. You'll see the Contact Us page where you can fill out and submit the contact form
3. After submitting the form, you'll be redirected to a Thank You page
4. To view submitted messages, click on the "View Submitted Data" link in the navigation bar
5. This will take you to a page displaying all messages that have been sent and stored in the MongoDB database

## Troubleshooting

- If you encounter any issues with the backend, make sure your MongoDB connection string is correct and that you have the necessary permissions
- For frontend issues, check the console in your web browser for any error messages

## Additional Information

- Ensure both the backend and frontend servers are running simultaneously for the application to function correctly