import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["present", "absent", "late"],
        required: true
    },
    remarks: String
}, { timestamps: true });

export default mongoose.model("Attendance", attendanceSchema);
