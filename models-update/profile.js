const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { leaveTypes } = require("../data");

// ? create schema
const ProfileSchema = new Schema(
  {
    // profileId: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
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
