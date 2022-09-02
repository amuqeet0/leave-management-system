const express = require("express");
const router = express.Router();
// ? local
const {
  getLoginAttempts,
  getLoginAttemptsByUserId,
} = require("./getLoginAttempts");
const addLoginAttempt = require("./addLoginAttempt");
const {
  deleteLoginAttempt,
  deleteAllLoginAttempts: delAllUserLA,
} = require("./deleteLoginAttempt");

router.get("/", getLoginAttempts);

router.get("/get-all/:userId", getLoginAttemptsByUserId);

router.post("/add-login-attempt", addLoginAttempt);

router.delete("/login-attempt/:LAid", deleteLoginAttempt);

router.delete("/delete-all/:userId", delAllUserLA);

module.exports = router;
