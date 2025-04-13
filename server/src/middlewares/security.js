import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

// Rate limiter configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

export const securityMiddleware = (app) => {
  // Apply security middlewares
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(limiter);
}; 