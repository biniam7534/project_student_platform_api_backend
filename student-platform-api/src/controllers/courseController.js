import Course from "../model/coursemodel.js";
import Material from "../model/materialmodel.js";
import Assignment from "../model/assignmentmodel.js";

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private (Teacher/Admin)
export const createCourse = async (req, res) => {
    try {
        const { title, description, teacherId } = req.body;

        const course = await Course.create({
            title,
            description,
            teacherId: teacherId || req.user.id // Default to current user if teacher
        });

        res.status(201).json({
            success: true,
            data: course
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public/Private
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate("teacherId", "username email");
        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public/Private
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate("teacherId", "username email");

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Fetch materials and assignments
        const materials = await Material.find({ courseId: course._id });
        const assignments = await Assignment.find({ courseId: course._id });

        res.status(200).json({
            success: true,
            data: {
                ...course._doc,
                materials,
                assignments
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private (Teacher/Admin)
export const updateCourse = async (req, res) => {
    try {
        let course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Check if user is the teacher or admin (implement role check if needed)

        course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: course
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private (Teacher/Admin)
export const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        await course.deleteOne();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
