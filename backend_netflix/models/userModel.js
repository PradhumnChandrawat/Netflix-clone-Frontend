import mongoose from "mongoose";
import validator from "validator";

// User Schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (email) {
          return validator.isEmail(email);
        },
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
