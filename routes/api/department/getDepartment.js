const Department = require("../../../models/Department");

const getAllDepartments = (req, res) => {
  Department.find({})
    .sort({ name: 1 })
    .lean()
    .then((departments) => {
      if (!departments) {
        res.status(404).json();
      } else {
        res.status(200).json(departments);
      }
    });
};

const getDepartmentByID = (req, res) => {
  Department.find({ id: req.params.id })
    .lean()
    .then((department) => {
      if (!department) {
        res.status(404).json();
      } else {
        res.status(200).json(department);
      }
    });
};

const getDepartmentByName = (req, res) => {
  Department.find({ name: req.params.name })
    .lean()
    .then((department) => {
      if (!department) {
        res.status(404).json();
      } else {
        res.status(200).json(department);
      }
    });
};

module.exports = { getAllDepartments, getDepartmentByID, getDepartmentByName };
