import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment",
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: String, // Text submission
    fileUrl: String, // Attachment link
    submittedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["pending", "graded"],
        default: "pending"
    },
    feedback: String,
    grade: String
}, { timestamps: true });

export default mongoose.model("Submission", submissionSchema);
