import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["pdf", "video", "link", "docx"],
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: String
}, { timestamps: true });

export default mongoose.model("Material", materialSchema);
