import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    type: {
        type: String,
        enum: ["class", "exam", "event"],
        required: true
    },
    title: String,
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    location: String, // Room number or Link
    description: String
}, { timestamps: true });

export default mongoose.model("Schedule", scheduleSchema);
