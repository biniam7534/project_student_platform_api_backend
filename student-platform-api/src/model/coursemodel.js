const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);