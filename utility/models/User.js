import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
