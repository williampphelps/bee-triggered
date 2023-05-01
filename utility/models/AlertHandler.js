import mongoose from "mongoose";

const AlertHandlerSchema = new mongoose.Schema({
  type: String,
  address: String,
});

module.exports = mongoose.models.AlertHandler || mongoose.model("AlertHandler", AlertHandlerSchema);
