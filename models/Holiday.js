const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { holidayTypes } = require("../data");

//create schema
const HolidaySchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    format: {
      type: String,
      default: "DD-MM-YYYY",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    holidayType: {
      type: String,
      required: true,
      enum: ["PUBLIC", "OTHER"],
    },
  },
  { minimize: false }
);

module.exports = Holiday = mongoose.model("holidays", HolidaySchema);
