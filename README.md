# PassOP - Password Manager

PassOP is a modern, responsive password manager app featuring two implementations:

- **Frontend-only (LocalStorage) version** — stores all data in the browser.
- **MERN (MongoDB) version** — full-stack with React frontend and Express/MongoDB backend.

## Project-video
https://github.com/user-attachments/assets/440e51b7-5bb6-47c7-8478-9a28adf311df

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [LocalStorage Version](#localstorage-version)
  - [MongoDB Version (MERN Stack)](#mongodb-version-mern-stack)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Acknowledgements](#acknowledgements)

---

## Features

- Add, view, copy, edit, and delete passwords
- Responsive UI built with Tailwind CSS
- Toast notifications for user interactions
- Icon-rich interface (copy, visibility toggle, branding)
- Two implementations:
  - **LocalStorage**: All data stays in the browser
  - **MongoDB**: Data persisted via REST API to a MongoDB database

---

## Project Structure

```
pass-OP ( LocalStorage )     # Frontend-only React app (LocalStorage)
  ├── public/                # Icons and images
  ├── src/                  # React source code
  │    ├── components/      # Footer, Navbar, Password Manager UI
  │    ├── App.jsx, App.css
  │    └── main.jsx
  ├── index.html
  ├── package.json
  └── ...

pass-OP ( mongo-db )        # Full stack MERN app (React + Express/MongoDB)
  ├── backend/              # Express API and MongoDB config
  │    ├── server.js        # REST API for passwords
  │    └── .env             # MongoDB connection string
  ├── public/               # Icons and images
  ├── src/                  # React code (similar to above)
  │    └── components/
  ├── index.html
  ├── package.json
  └── ...
```

---

## Screenshots

> Add your app demo screenshots here!

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- MongoDB (for mongo-db version, [install guide](https://docs.mongodb.com/manual/installation/))

### LocalStorage Version

1. Navigate to the project:
   ```sh
   cd "pass-OP ( LocalStorage )"
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the dev server:
   ```sh
   npm run dev
   ```
4. Open the provided localhost URL in your browser.

### MongoDB Version (MERN Stack)

**Backend:**

1. Navigate to backend directory:
   ```sh
   cd "pass-OP ( mongo-db )/backend"
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Set up your MongoDB URI in `.env` (default: `mongodb://localhost:27017`):
   ```env
   MONGO_URI = "mongodb://localhost:27017"
   ```
4. Start the backend API:
   ```sh
   node server.js
   ```

**Frontend:**

1. Open a new terminal. Go to the frontend directory:
   ```sh
   cd "pass-OP ( mongo-db )"
   ```
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
4. Visit the local URL in your browser. The frontend will interact with the API at `http://localhost:3000`.

---

## Usage
- Add a new password record with website name, username, and password.
- Edit or delete saved passwords.
- Click the copy icon to copy website, username, or password to clipboard.
- Click the eye icon to toggle password visibility (input field only).
- In mongo-db version, all actions persist to the backend; in LocalStorage version everything stays in browser storage only.

---

## Tech Stack
- **Frontend:** React, Tailwind CSS, Vite, react-toastify
- **Backend (MERN):** Node.js, Express, MongoDB, body-parser, cors, dotenv
- **Tooling:** ESLint, PostCSS, UUID

---

## Acknowledgements
- Inspired by learning paths and modern web security practices
- [React](https://react.dev/), [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [TailwindCSS](https://tailwindcss.com/), [Vite](https://vitejs.dev/)
- Icons by [Lordicon](https://lordicon.com/) and custom assets
