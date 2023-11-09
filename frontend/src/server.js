export const server = process.env.SERVER_URL = "DEVELOPMENT" ? "http://localhost:8000/api/v2" : "/api/v2"

// SERVER_URL="DEVELOPMENT"
// SERVER_URL="PRODUCTION"
// if development , /api/v2/
// if production, "http://localhost:8000/api/v2"

