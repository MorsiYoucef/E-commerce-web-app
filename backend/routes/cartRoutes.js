import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createCart, deleteCart, getCarts, mergeCartsOnLogin, updateCartItemQuantity } from "../controllers/cartControllers.js";

const router = express.Router();

router.post('/create-cart', createCart )
router.put('/update-quantity', updateCartItemQuantity)
router.delete('/delete-item', deleteCart)
router.get('/get-carts', getCarts)
router.post('/merge-carts', mergeCartsOnLogin  )

export default router;