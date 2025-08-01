# Payment Dashboard Backend

## Description
This is a robust and scalable backend API application built with **NestJS**. It is the server-side component for a full-stack payment dashboard system, designed to be consumed by a frontend application (e.g., a Flutter app). The backend provides a set of secure REST APIs for managing user authentication, handling payment data, and user management.

## Key Features
* **Auth Module:** A user authentication system that securely logs in users and issues JSON Web Tokens (JWT) for subsequent authenticated requests.
* **Payments Module:** REST APIs that allow a client to retrieve a list of all payments, view summarized dashboard statistics, and create new payment records.
* **Users Module:** APIs to fetch a list of all registered users and to add new user accounts to the system.

## Technology Stack
* NestJS
* TypeScript
* Node.js

## How to Run the Project
1.  **Clone the repository:**
    `git clone [your-github-repo-link]`
2.  **Install dependencies:**
    `npm install`
3.  **Run the application:**
    `npm run start`

## API Endpoints
Yahan Postman mein banaye gaye endpoints ki jaankari hai, jisse aapki APIs ko test kiya jaa sake.
* `POST /auth/login` - To log in
* `GET /payments` - To get all payments
* `GET /payments/stats` - To get payment stats
* `GET /users` - To get all users
* `POST /users` - To create a new user