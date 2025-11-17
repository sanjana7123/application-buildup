# Auth System - MERN Stack

A simple and clean authentication system built with React.js frontend and Node.js/Express backend.

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Password Hashing
- Input Validation

## 🛠 Tech Stack

**Frontend:** React, React Router, Axios, Tailwind CSS  
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## 📦 Installation

### Backend Setup
```bash
cd server
npm install
```

Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
PORT=5000
```

Start backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
```

Create `.env` file:
```env
VITE_API_BASE_URL=http://localhost:5000/api/auth
```

Start frontend:
```bash
npm run dev
```

## 🔌 API Endpoints

### `POST /api/auth/register`
Register a new user
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

### `POST /api/auth/login`
Login user
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### `GET /api/auth/me`
Get current user (requires JWT token in header)

## 🗂 Project Structure
```
auth-system/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Login, Register, Home
│   │   ├── services/      # authService.js
│   │   └── App.jsx
└── server/                # Express backend
    ├── controllers/       # authController.js
    ├── middlewares/       # auth, validation
    ├── models/           # User.js
    └── routes/           # authRoutes.js
```

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=30d
PORT=5000
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api/auth
```

## 🚀 Running the Application

1. **Start MongoDB** (make sure MongoDB is running)
2. **Start Backend:**
   ```bash
   cd server
   npm run dev
   ```
3. **Start Frontend:**
   ```bash
   cd client
   npm run dev
   ```
4. **Open browser:** http://localhost:5173

## 📝 Usage

1. **Register:** Create a new account with username, email, and password
2. **Login:** Sign in with email and password
3. **Access Protected Routes:** Home page is protected and requires authentication
4. **Logout:** Click logout button to clear session

## 🛡 Security Features

- Passwords hashed with bcryptjs
- JWT tokens for authentication
- Input validation on client and server
- Protected routes

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning and development.
