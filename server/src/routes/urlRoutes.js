import express from 'express';
import { 
  createShortUrl, 
  getUrls, 
  getUrl, 
  deleteUrl, 
  redirectToUrl 
} from '../controllers/urlController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

// Public route for redirecting
router.get('/:shortCode', redirectToUrl);

// Protected routes
router.use(protect);
router.post('/', createShortUrl);
router.get('/', getUrls);
router.get('/:id', getUrl);
router.delete('/:id', deleteUrl);

export default router; 