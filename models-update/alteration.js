const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const AlterationSchema = new Schema({
  alterationId: {
    type: String,
    required: true,
    unique: true,
  },
  leaveId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Leave",
    required: true,
  },
  originalDate: {
    type: Date,
    required: true,
  },
  //   originalHour: {
  //     type: Number,
  //     required: true,
  //   },
  alternationOption: {
    // what's the purpose of this?
    type: String,
    enum: ["POSTPONE", "ALTERNATE"],
    required: true,
  },

  alterationDate: {
    type: Date,
    // mind the dif timezone
    default: now(),
    required: true,
  },

  originalStaff: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  alternatingStaff: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  status: {
    type: String,
    enum: ["WAITING", "ACCEPTED", "REJECTED", "EXPIRED", "VIEWED"],
    default: "WAITING",
  },

  leaveApproved: {
    type: String,
    enum: ["WAITING", "ACCEPTED", "REJECTED"],
    default: "WAITING",
  },
});

module.exports = Alteration = mongoose.model("alterations", AlterationSchema);
