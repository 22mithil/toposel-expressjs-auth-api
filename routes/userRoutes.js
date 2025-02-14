import express from "express";
import { registerUser, loginUser, searchUser } from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/search", authenticateToken, searchUser);

export default router;