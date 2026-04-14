import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
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
    examType: {
        type: String,
        enum: ["quiz", "midterm", "final", "assignment"],
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    maxScore: {
        type: Number,
        required: true,
        default: 100
    },
    grade: {
        type: String, // A, B, C, D, F
        required: true
    },
    feedback: String
}, { timestamps: true });

export default mongoose.model("Grade", gradeSchema);
