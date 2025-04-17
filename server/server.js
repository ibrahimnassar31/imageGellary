import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import { securityMiddleware } from "./src/middlewares/security.js";
import { utilityMiddleware } from "./src/middlewares/utility.js";
import { errorHandler } from "./src/middlewares/error.js";
import authRoutes from "./src/routes/authRoutes.js";
import urlRoutes from "./src/routes/urlRoutes.js";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Apply middlewares
securityMiddleware(app);
utilityMiddleware(app);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/urls", urlRoutes);

// Basic route
app.get("/", (req, res) => {
   console.log(req.headers);
   res.json({ message: "Welcome to the URL Shortener API" });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
   console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
