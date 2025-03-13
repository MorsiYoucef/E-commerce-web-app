import express from 'express';
import {
    getAllOrders,
    getUserOrders,
    getOrderById,
    // createOrder,
    updateOrderStatus,
    // updateOrderToPaid,
    deleteOrder
} from '../controllers/orderAdminControllers.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/get-orders', protect, adminProtect, getAllOrders);
router.get('/my-orders', protect,adminProtect, getUserOrders);
router.get('/:id', protect,adminProtect, getOrderById);
router.put('/:id/status', protect, adminProtect, updateOrderStatus);
// router.post('/', protect, createOrder);
// router.put('/:id/pay', protect, updateOrderToPaid);
router.delete('/:id', protect, adminProtect, deleteOrder);

export default router;