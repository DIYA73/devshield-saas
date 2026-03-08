import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  plan: string;
  requestLimit: number;
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  plan: {
    type: String,
    default: "free",
  },

  requestLimit: {
    type: Number,
    default: 1000,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;