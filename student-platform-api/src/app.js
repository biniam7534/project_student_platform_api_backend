import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import studentRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

export default app;