import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getOrder, getOrders } from '../controllers/orderControllers.js';

const router = express.Router();

router.get('/', protect, getOrders)
router.get('/:id', protect, getOrder)

export default router;