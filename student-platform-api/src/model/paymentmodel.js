import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["paid", "unpaid", "pending"],
        default: "unpaid"
    },
    type: {
        type: String, // Tuition, Registration, Exam Fee
        required: true
    },
    dueDate: Date,
    paidAt: Date,
    paymentMethod: String,
    transactionId: String,
    history: [{
        date: Date,
        amount: Number,
        method: String
    }]
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
