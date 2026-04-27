import mongoose, { Schema, type Document } from "mongoose";
import validator from "validator"
import { UserDetails } from "../types";
interface UserSchema extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserSchema>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});



const model = mongoose.model<UserSchema>("User", userSchema);

module.exports = userSchema;
