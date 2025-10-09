# Travel Agency Backend (Hono, Bun, MVC)

## Overview
This backend is built with Hono (TypeScript) and follows a professional MVC pattern inspired by Laravel/Next.js. Bun is used for package management and scripts. Swagger UI is integrated for API documentation.

## Folder Structure
- `src/controllers/` — Route handlers and business logic
- `src/models/` — Data models and ORM definitions
- `src/services/` — Service classes for business logic
- `src/routes/` — Route definitions
- `src/views/` — View templates (if needed)
- `src/middlewares/` — Custom middleware functions
- `src/config/` — Configuration files (env, db, etc.)
- `docs/` — API documentation and Swagger files

## Setup Steps
1. Install dependencies: `bun install`
2. Start development server: `bun run dev`
3. Access Swagger UI at `/docs` endpoint

## Best Practices
- Use controllers for request handling, keep logic in services
- Models should only handle data and validation
- Use middlewares for authentication, logging, etc.
- Document all endpoints in Swagger

## Next Steps
- Implement models, controllers, and services for travel agency features
- Add authentication and user management
- Expand API documentation in `docs/`

---
Refer to this README for setup and usage instructions.
# rbs-travels-backend
