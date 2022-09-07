const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { leaveTypes, leaveStatuses, staffTypes } = require("../data");

//leave type
//1 -- Casual Leave -- cl -
//2 -- Compensation Leave -- cplw
//3 -- Earn Leave -- el
//4 -- Medical Leave -- ml
//5 -- On Duty -- od
//6 -- Restricted Holiday -- rh
//7 -- Special Casual Leave -- scl
//8 -- Casual Leave - 30 Days -- cl30
//9 -- Casual Leave - 20 Days -- cl20
//10 - Casual Leave - 6 Days -- cl6

//leave status
//0 -- waiting (just applied / waiting for alterations to be accepted)
//1 -- accepted
//2 -- rejected by HOD
//3 -- rejected by alternating staff
//4 -- cancelled (cancelled by the applicant)

//create schema
const LeaveSchema = new Schema({
  leaveId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applyDate: {
    type: Date,
    // now() stores the server date(which can be located in dif region having dif timezone)
    // default: now(),
    required: true,
  },
  leaveDateFrom: {
    type: Date,
    required: true,
  },
  leaveDateTo: {
    type: Date,
    required: true,
  },
  noOfDays: {
    type: Number,
    required: true,
  },
  halfDaySession: {
    type: Boolean,
    default: false,
  },
  leaveType: {
    type: String,
    enum: Object.values(leaveTypes),
  },
  reason: {
    type: String,
    required: true,
  },
  holiday: {
    type: Schema.Types.ObjectId, // ? or add enum of holidays
    ref: "holiday",
  },
  isVacation: {
    type: Boolean,
    default: false,
  },
  document: {
    // path to uploaded document
    type: String,

    default: "",
  },
  isDocumentProvided: { type: Boolean, default: false },
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
  alterations: [
    {
      type: Schema.Types.ObjectId,
      ref: "alterations",
    },
  ],
});

Object.assign(LeaveSchema.statics, { leaveTypes, leaveStatuses });

module.exports = Leave = mongoose.model("leaves", LeaveSchema);
