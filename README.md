# AL YAMAMA Full Stack Application

## Overview
Full-stack web app with Node.js/Express backend + MySQL/Sequelize + React + Tailwind on frontend.

## Backend

1. cd backend
2. copy `.env.example` to `.env` and set DB credentials
3. npm install
4. npm run seed
5. npm run dev

API endpoints:
- /api/auth/register
- /api/auth/login
- /api/restaurants
- /api/branches
- /api/menu
- /api/orders
- /api/reservations

## Frontend

1. cd frontend
2. npm install
3. npm run dev

Routes:
- / (home)
- /restaurants
- /branch/:id
- /cart
- /orders
- /dashboard

## Notes
- Branch manager sees only branch orders in backend logic.
- Use JWT authentication with `Authorization: Bearer <token>`.
- Clean MVCS structure with controllers/services/routes/models and middleware.
