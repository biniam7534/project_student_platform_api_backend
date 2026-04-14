import User from "../model/usermodel.js";
import Course from "../model/coursemodel.js";
import Attendance from "../model/attendancemodel.js";
import Grade from "../model/grademodel.js";
import Schedule from "../model/schedulemodel.js";
import Payment from "../model/paymentmodel.js";
import Notification from "../model/notificationmodel.js";
import Material from "../model/materialmodel.js";
import Submission from "../model/submissionmodel.js";

// 📊 1. Dashboard - Aggregated Summary
export const getStudentDashboard = async (req, res) => {
    try {
        const studentId = req.user.id; // From auth middleware

        const attendance = await Attendance.find({ studentId }).limit(10);
        const recentGrades = await Grade.find({ studentId }).sort({ createdAt: -1 }).limit(5);
        const upcomingSchedules = await Schedule.find({ startTime: { $gte: new Date() } }).limit(5);
        const notifications = await Notification.find({ $or: [{ recipientId: studentId }, { recipientId: null }] }).limit(5);

        res.status(200).json({
            success: true,
            data: {
                attendance,
                recentGrades,
                upcomingSchedules,
                notifications
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 📚 2. Courses
export const getEnrolledCourses = async (req, res) => {
    try {
        // Assuming student courses are tracked in a many-to-many or user field
        // For now, let's just return all as a mock enrollment
        const courses = await Course.find().populate("teacherId", "username email");
        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getCourseMaterials = async (req, res) => {
    try {
        const { courseId } = req.params;
        const materials = await Material.find({ courseId });
        res.status(200).json({ success: true, data: materials });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 📈 3. Performance / Grades
export const getStudentGrades = async (req, res) => {
    try {
        const studentId = req.user.id;
        const grades = await Grade.find({ studentId }).populate("courseId", "title");
        res.status(200).json({ success: true, data: grades });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 📅 4. Schedule & Calendar
export const getStudentSchedule = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate("courseId", "title");
        res.status(200).json({ success: true, data: schedules });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 🧾 5. Fees / Payment
export const getPaymentStatus = async (req, res) => {
    try {
        const studentId = req.user.id;
        const payments = await Payment.find({ studentId });
        res.status(200).json({ success: true, data: payments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 🧑🎓 6. Profile Management
export const updateProfile = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.findByIdAndUpdate(req.user.id, { username, email }, { new: true });
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 🔔 7. Notifications
export const getNotifications = async (req, res) => {
    try {
        const studentId = req.user.id;
        const notifications = await Notification.find({ $or: [{ recipientId: studentId }, { recipientId: null }] });
        res.status(200).json({ success: true, data: notifications });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 📝 8. Submissions
export const submitAssignment = async (req, res) => {
    try {
        const { assignmentId, content, fileUrl } = req.body;
        const submission = await Submission.create({
            assignmentId,
            studentId: req.user.id,
            content,
            fileUrl
        });
        res.status(201).json({ success: true, data: submission });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
