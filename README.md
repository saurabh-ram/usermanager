# User Manager — Full Stack Application

Frontend: **React + Redux Toolkit + Chakra UI**  
Backend: **Spring Boot (Java)**  
Database: **PostgreSQL**

---

## Overview

This project is a simple User Manager application that allows:

- List all users  
- Create a new user  
- Edit an existing user  
- Delete a user  
- Show validation errors  
- Communicate with Spring Boot backend APIs  

Frontend runs on **http://localhost:5173**  
Backend runs on **http://localhost:8050**

---

## 1. Start Backend (Spring Boot)

### Requirements
- Java 21  
- Spring Tool Suite (STS) or IntelliJ  
- PostgreSQL running  
- Database configured in `application.properties`

### Steps
1. Open the **backend** folder in **STS/IntelliJ**
2. Make sure PostgreSQL is running
3. Start the backend:

   ```bash
   Run on STS or IntelliJ
   ```
   Your backend will run on:

   ```bash
   http://localhost:8050
   ```

## 2. Start Backend (Spring Boot)

1. Open the frontend folder in VS Code
2. Install dependencies:
   ```bash
   npm i
   ```
3. Start the development server:
   ```bash
   http://localhost:8050
   ```
4. Frontend runs on:
   ```bash
   http://localhost:5173
   ```
5. You can now:
* Add users
* Edit users
* Delete users
* View all users

All operations communicate with the live Spring Boot API.

### API Endpoints

| Function       | Method | URL                                             |
|----------------|--------|-------------------------------------------------|
| Get all users  | GET    | `http://localhost:8050/usermanager/user/get`    |
| Create user    | POST   | `http://localhost:8050/usermanager/user/add`    |
| Update user    | PUT    | `http://localhost:8050/usermanager/user/{id}`   |
| Delete user    | DELETE | `http://localhost:8050/usermanager/user/{id}`   |


## Tech Stack
### Frontend
* React 18
* Redux Toolkit
* Chakra UI
* React Hook Form
* Zod
* Axios
* Vite

### Backend
* Spring Boot
* Java
* PostgreSQL
* Spring Data JPA
