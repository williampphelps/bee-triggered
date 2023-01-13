import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  dst_host: String,
  dst_port: Number,
  local_time: Date,
  local_time_adjusted: Date,
  logdata: {},
  logtype: Number,
  node_id: String,
  src_host: String,
  src_port: Number,
  utc_time: Date,
  status: String,
});

module.exports = mongoose.models.Log || mongoose.model("Log", LogSchema);
