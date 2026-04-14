import express from "express";
import {
    getStudentDashboard,
    getEnrolledCourses,
    getCourseMaterials,
    getStudentGrades,
    getStudentSchedule,
    getPaymentStatus,
    updateProfile,
    getNotifications,
    submitAssignment
} from "../controllers/studentController.js";
import { protect } from "../middleware/auth.js"; // I will implement this

const router = express.Router();

// All routes are protected and for student role
router.get("/dashboard", protect, getStudentDashboard);
router.get("/courses", protect, getEnrolledCourses);
router.get("/courses/:courseId/materials", protect, getCourseMaterials);
router.get("/grades", protect, getStudentGrades);
router.get("/schedule", protect, getStudentSchedule);
router.get("/payments", protect, getPaymentStatus);
router.put("/profile", protect, updateProfile);
router.get("/notifications", protect, getNotifications);
router.post("/assignments/submit", protect, submitAssignment);

export default router;
