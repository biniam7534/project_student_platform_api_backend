import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  title: String,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },
  content: String,
  dueDate: Date
}, { timestamps: true });

export default mongoose.model("Assignment", assignmentSchema);