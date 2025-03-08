import express from "express";
import { protect, adminProtect } from "../middleware/authMiddleware.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get('/', getProducts)
router.post('/createProduct',protect, adminProtect, createProduct)
router.put('/updateProduct/:id',protect, adminProtect, updateProduct)
router.delete('/deleteProduct/:id',protect, adminProtect, deleteProduct)

export default router;