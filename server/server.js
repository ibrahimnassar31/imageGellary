import express from 'express';
import dotenv from 'dotenv';
import { securityMiddleware } from './src/middlewares/security.js';
import { utilityMiddleware } from './src/middlewares/utility.js';
import { errorHandler } from './src/middlewares/error.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Apply middlewares
securityMiddleware(app);
utilityMiddleware(app);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the URL Shortener API' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
