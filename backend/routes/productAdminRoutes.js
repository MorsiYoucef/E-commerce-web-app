import express from 'express';
import {
    getAllProducts,
    getProductById,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    // toggleProductFeature,
    // toggleProductPublish
} from '../controllers/productAdminControllers.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/get-products', protect, adminProtect, getAllProducts);
router.get('/:id', protect, adminProtect, getProductById);
// router.post('/', protect, adminProtect, createProduct);
// router.put('/:id', protect, adminProtect, updateProduct);
// router.delete('/:id', protect, adminProtect, deleteProduct);
// router.patch('/:id/feature', protect, adminProtect, toggleProductFeature);
// router.patch('/:id/publish', protect, adminProtect, toggleProductPublish);

export default router;