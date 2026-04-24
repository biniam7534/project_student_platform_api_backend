import express from "express";
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} from "../controllers/courseController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/")
    .get(getAllCourses)
    .post(protect, createCourse);

router.route("/:id")
    .get(getCourseById)
    .put(protect, updateCourse)
    .delete(protect, deleteCourse);

export default router;
