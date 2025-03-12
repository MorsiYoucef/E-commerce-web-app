import express from "express";
import {protect, adminProtect} from "../middleware/authMiddleware.js";
import {createUser, deleteUser, getUsers, updateUser} from "../controllers/userAdminControllers.js";


const router = express.Router();

router.get("/get-users", protect, adminProtect, getUsers);
router.post("/create-user", protect, adminProtect, createUser);
router.put("/update-user/:id", protect, adminProtect, updateUser);
router.delete("/delete-user/:id", protect, adminProtect, deleteUser);



export default router;




