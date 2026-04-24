import express from "express";
import {
    getDashboardStats,
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    getAllPayments
} from "../controllers/adminController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// All routes are protected
router.get("/dashboard-stats", protect, getDashboardStats);

router.route("/students")
    .get(protect, getAllStudents)
    .post(protect, createStudent);

router.route("/students/:id")
    .put(protect, updateStudent)
    .delete(protect, deleteStudent);

router.get("/payments", protect, getAllPayments);

export default router;
