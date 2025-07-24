# Visualization and Expenses Tracker Fullstack

## Overview
This is a fullstack application for tracking expenses and incomes, featuring data visualization and user authentication. The project is split into a React + Vite frontend and an Express/MongoDB backend, with TailwindCSS for styling and Recharts for data visualization.

---

## Features
- User authentication (login/signup)
- Add, view, and manage incomes and expenses
- Dashboard with data visualization (charts, graphs)
- File upload support (e.g., receipts)
- Responsive UI with TailwindCSS

---

## Project Structure
```
/ (root)
  |-- backend/           # Express.js backend (API, DB, auth)
  |-- frontend/expense_tracker/  # React + Vite frontend
  |-- tailwindcss4/      # TailwindCSS config/template
```

---

## Backend
- **Tech:** Node.js, Express, MongoDB (via Mongoose), JWT, Multer, XLSX
- **Main file:** `backend/server.js`
- **API Endpoints:**
  - `/api/v1/auth` (authentication)
  - `/api/v1/income` (income management)
  - `/api/v1/expense` (expense management)
  - `/api/v1/dashboard` (dashboard data)
- **Run locally:**
  ```bash
  cd backend
  npm install
  npm run dev
  ```
  The backend will start on the port specified in `.env` (default: 8000).

---

## Frontend
- **Tech:** React, Vite, React Router, Recharts, TailwindCSS, Axios
- **Main entry:** `frontend/expense_tracker/src/main.jsx`
- **Pages:** Login, Signup, Dashboard (Home, Income, Expense)
- **Run locally:**
  ```bash
  cd frontend/expense_tracker
  npm install
  npm run dev
  ```
  The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

---

## TailwindCSS
- TailwindCSS is used for styling. Configuration and templates are in the `tailwindcss4/` directory.

---

## Environment Variables
- Backend requires a `.env` file with at least:
  ```env
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  CLIENT_URL=http://localhost:5173
  ```

---

## Getting Started
1. Clone the repository
2. Set up environment variables for the backend
3. Install dependencies in both `backend` and `frontend/expense_tracker`
4. Start backend and frontend servers
5. Access the app at [http://localhost:5173](http://localhost:5173)

---

## License
This project is licensed under the ISC License. 