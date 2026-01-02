import mongoose, { Document, model, models, Schema } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: Boolean;
  isAcceptingMessage: Boolean;
  Messages: Message[];
}

const messageSchema = new Schema<Message>({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: [true, "Username is required..."],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required..."],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please Provide a valid Email ID"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required..."],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify Code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry Date is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  Messages: [messageSchema],
});

const userModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

export default userModel;
