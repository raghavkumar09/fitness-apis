# Fitness APIs 🏋️‍♂️

A backend REST API for fitness applications built using **Node.js**, **TypeScript**, **Express**, and **MySQL**. This project provides a scalable backend structure for managing users, workouts, and other fitness-related data.

---

## 🔧 Tech Stack

* Node.js
* TypeScript
* Express.js
* MySQL
* dotenv
* CORS

---

## 📁 Folder Structure

```
fitness-apis/
├── src/
│   ├── config/         # DB config and environment setup
│   ├── controllers/    # Request handlers
│   ├── models/         # Sequelize models
│   ├── routes/         # API routes
│   ├── index.ts        # Main entry point
├── dist/               # Transpiled JS files (after build)
├── .env
├── tsconfig.json
├── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/raghavkumar09/fitness-apis.git
cd fitness-apis
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
PORT=5000
```

> 💡 You can use [freesqldatabase.com](https://www.freesqldatabase.com/) or any other MySQL host for testing.

---

## ⚙️ Scripts

```bash
# Build the project
npm run build

# Run the project in development with ts-node
npm run dev

# Start the project from compiled dist
npm start
```

---

## 🌐 API Endpoints

You can define your endpoints under `/src/routes`. Example routes may include:

* `GET /users`
* `POST /register`
*  POST /login
* `GET /`

You can test endpoints using **Postman** or **Thunder Client**.

---

## 🚀 Deployment (e.g., Render)

### 1. Ensure `dist/index.js` is built on deploy

Add this to `package.json`:

```json
"build": "npm run build"
```

### 2. Set Render Start Command:

```
npm start
```

## 📬 Contact

Made by **Raghav Kumar**
🔗 [LinkedIn](https://linkedin.com/in/raghavkumar09)

---

