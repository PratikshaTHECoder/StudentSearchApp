# StudentSearchApp

A simple student search application that allows users to search for students by name using a RESTful API. The backend serves student data from a local JSON file.

## 📌 Features
- Search students by name.
- RESTful API for fetching student data.
- Frontend built with React (Vite).
- Backend built with Express.js.

---

## 🛠️ Setup Instructions

### 🔹 Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

---

## 🚀 Running the Application

### 📌 Clone the Repository
```sh
git clone https://github.com/PratikshaTHECoder/StudentSearchApp.git
cd StudentSearchApp
```

---

## 🖥️ Backend Setup

### 🔹 Install Dependencies
```sh
cd studentProjectApi
npm install
```

### 🔹 Start the Backend Server
```sh
node server.js
```
The backend will run on **`http://localhost:3000`**.

---

## 🎨 Frontend Setup

### 🔹 Install Dependencies
```sh
cd ../student
npm install
```

### 🔹 Start the Frontend Server
```sh
npm run dev
```
The frontend will run on **`http://localhost:5173`**.

---

## 🔧 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/students?name=John` | Search students by name |

------

## 📞 Contact
For any questions or contributions, feel free to reach out via GitHub Issues.

Happy Coding! 🚀

