import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["student", "parent", "teacher", "admin"],
    default: "student"
  },
  refreshToken: { type: String, select: false }
}, { timestamps: true });

export default mongoose.model("User", userSchema);