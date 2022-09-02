const mongoose = require("mongoose");
const Department = require("../../../models/Department");

const addDepartment = (req, res) => {
  if (!req.query.name) {
    return res.status(504).send("please enter name");
  } else {
    Department.findOne({ name: req.query.name }).then((depObj) => {
      if (depObj) {
        return res.status(400).json("department already exists");
      } else {
        new Department({
          id: mongoose.ObjectId,
          name: req.query.name,
        }).save();
        return res.status(200).json("new department created!");
      }
    });
  }
};

module.exports = addDepartment;
