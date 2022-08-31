const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const CourseSchema = new Schema({
  nameOfCourse: {
    type: String,
    required: true,
    trim: true,
  },
  courseCode: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = Course = mongoose.model("courses", CourseSchema);

const physics = new Course({
  nameOfCourse: "physics",
  courseCode: "102120",
});

physics.save();
