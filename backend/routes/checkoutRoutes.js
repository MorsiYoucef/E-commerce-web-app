import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createCheckout, finalCheckout, updateCheckout } from "../controllers/checkoutControllers.js";

const router = express.Router();

router.post("/", protect, createCheckout)
router.put("/:id/pay", protect, updateCheckout)
router.post("/:id/finalize",protect, finalCheckout)

export default router;
