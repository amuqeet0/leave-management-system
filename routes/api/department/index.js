const express = require("express");
const router = express.Router();
// const passport = require("passport");
// const { body } = require("express-validator");

const { accountTypes, holidayTypes } = require("../../../data");
const { checkRole: permit } = require("../../utils/checkRole");
const {
  getAllDepartments,
  getDepartmentByID,
  getDepartmentByName,
} = require("./getDepartment");
const addDepartment = require("./addDepartment");
const {
  editDepartmentById,
  editDepartmentByName,
} = require("./editDepartment");

router.get(
  "/",
  //   permit(accountTypes.ADMIN),
  getAllDepartments
);

router.get("/department/:name", getDepartmentByName);

router.get("/department/:id&:name", getDepartmentByID);

router.post("/department", addDepartment);

router.patch("/department/:id&:newname", editDepartmentById);

router.patch("/department/:oldname&:newname", editDepartmentByName);

module.exports = router;
