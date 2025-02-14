# Toposel-Express-auth-api backend application

## Description
This project is a backend API built using Node.js and Express. It includes authentication, user management, and other functionalities. The database connection is handled in the `lib/db.js` file using the `connectDB()` function.

## Folder Structure
```
project-root/
│-- controllers/        # Contains controller files for handling API logic
│-- lib/
│   ├── db.js           # Database connection setup
│-- models/             # Mongoose models
│-- routes/             # Express route handlers
│-- middleware/         # Middleware functions
│-- .env.example        # Example environment variables
│-- package.json        # Project dependencies
│-- server.js           # Entry point of the application
```

## Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   ## 🛠️ Installed Packages & Libraries
      Ensure you have the following installed:
      - **Express** - Web framework
      - **Mongoose** - MongoDB ODM
      - **dotenv** - For managing environment variables
      - **jsonwebtoken** - Handling JWT authentication
      - **bcryptjs** - Password hashing
      - **cors** - Handling cross-origin requests
      - **nodemon** (dev dependency) - Auto-reloading server during development


3. Set up environment variables:
   - Copy `.env.example` to `.env` and update the values accordingly.

4. Connect to the database:
   - Ensure MongoDB is running.
   - The `connectDB()` function in `lib/db.js` handles the database connection.

## Running the Project

### Start the Development Server
```sh
npm run dev
```
This will start the server using `nodemon` for auto-reloading.

### Start the Production Server
```sh
npm start
```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a token

### User Management
- `GET /api/user/search?query=username_or_email` - Search for a user

## Additional Notes
- Ensure that MongoDB is installed and running.
- Use Postman or any API testing tool to test the endpoints.

Happy coding! 🚀
