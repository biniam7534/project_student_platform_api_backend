import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Can be a specific student or null for all (announcement)
        default: null
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["announcement", "assignment", "reminder", "system"],
        default: "announcement"
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);
