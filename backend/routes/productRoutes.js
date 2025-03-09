import express from "express";
import { protect, adminProtect } from "../middleware/authMiddleware.js";
import { bestSellar, createProduct, deleteProduct, getProducts, newArrivals, productDetails, similarProducts, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get('/', getProducts)
router.get('/best-sellar/', bestSellar)
router.get('/new-arrivals', newArrivals)
router.get('/:id', productDetails)
router.get('/similar/:id', similarProducts)
router.post('/create-product',protect, adminProtect, createProduct)
router.put('/update-product/:id',protect, adminProtect, updateProduct)
router.delete('/delete-product/:id',protect, adminProtect, deleteProduct)

export default router;