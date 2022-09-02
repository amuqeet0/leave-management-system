const mongoose = require("mongoose");
const Department = require("../../../models/Department");

const editDepartmentById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("please enter department id");
  } else {
    Department.findOne({ id: req.params.id }).then((depObj) => {
      if (!depObj) {
        return res.status(400).json("department doesn't exists!");
      } else {
        //  await Department.updateOne({ id: req.params.id }, { name: req.params.name,}, {
        //     returnOriginal: false,
        // })
        // (async () => {
        //     await Department.findOneAndUpdate({ id: req.params.id }, { name: req.params.name,}, {
        //             returnOriginal: false,
        //         })
        // })()
        return res.status(200).json("Department name changed!");
      }
    });
  }
};

const editDepartment = (oldName, newName) => {
  return Department.findOneAndUpdate(
    { name: oldName },
    { name: newName },
    {
      returnOriginal: false,
    }
  );
};

const editDepartmentByName = async (req, res) => {
  if (!req.params.name) {
    return res.status(400).send("please enter department name!");
  } else {
    Department.findOne({ name: req.params.name }).then((depObj) => {
      if (!depObj) {
        return res.status(400).json("department doesn't exists!");
      } else {
        // await Department.findOneAndUpdate({ name: req.params.name }, { name: req.params.newName,}, {
        //     returnOriginal: false,
        // })
        // await editDepartment(req.params.oldName, req.params.newName);
        return res.status(200).json("Department name changed!");
      }
    });
  }
};

module.exports = { editDepartmentById, editDepartmentByName };
