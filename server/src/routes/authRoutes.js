import express from 'express';
import { signup, signin, logout } from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
// Protected routes

export default router; 