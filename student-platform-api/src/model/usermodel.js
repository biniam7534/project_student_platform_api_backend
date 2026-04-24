import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["student", "parent", "teacher", "admin", "staff"],
    default: "student"
  },
  // Student specific fields
  parents: String,
  phone: String,
  className: String, // e.g., '7th'
  grade: String, // e.g., 'A+'
  status: { type: String, enum: ["Paid", "Unpaid"], default: "Unpaid" },
  image: String,
  refreshToken: { type: String, select: false }
}, { timestamps: true });

export default mongoose.model("User", userSchema);