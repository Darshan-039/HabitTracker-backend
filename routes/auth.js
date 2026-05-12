import express from "express";

import {
    register,
    login,
    me,
    updateProfile,
} from "../controllers/authController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

// Auth Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.get("/me", protect, me);
router.put("/profile", protect, updateProfile);

export default router;