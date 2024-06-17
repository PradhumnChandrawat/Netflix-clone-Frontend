import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const tokenData = {
      id: user._id,
    };
    const token = await jwt.sign(tokenData, "secretjhhasgjhfkeyjsfck", {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        success: true,
        message: `Welcome back ${user.fullName}`,
        cookie: token,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      success: true,
      message: "User logged out successfully.",
    });
};

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        seccess: false,
        message: "Missing fullName, email, or password",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: "User has already been registered with this email address !!",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
    });
  } catch (error) {
    console.log(error);
  }
};
