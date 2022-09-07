const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ? create schema
const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      unique: true,
      ref: "User",
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
    address: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    country: { type: String, default: "" },
    phone: { type: String, required: true, default: "" },
    notifications: {
      type: [String],
      default: [],
    },
    leaves: {
      type: [Schema.Types.ObjectId],
      ref: "Leave",
      default: [],
    },
  },
  { minimize: false }
);

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
