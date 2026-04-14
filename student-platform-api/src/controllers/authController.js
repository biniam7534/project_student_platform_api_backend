import User from "../model/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || "secret", {
        expiresIn: "30d"
    });
};

export const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const userRole = role || "student";
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role: userRole
        });

        if (user) {
            res.status(201).json({
                success: true,
                token: generateToken(user._id),
                user: { id: user._id, username: user.username, email: user.email, role: user.role }
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                success: true,
                token: generateToken(user._id),
                user: { id: user._id, username: user.username, email: user.email, role: user.role }
            });
        } else {
            res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      await user.save();
      res.json({ success: true, message: "Password updated successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid old password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
