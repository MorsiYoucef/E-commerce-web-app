import express from 'express';
import { login, register,profile } from '../controllers/userControllers.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/register",  register)
router.post("/login", login)
router.get("/profile",protect,adminProtect, profile)

export default router;



