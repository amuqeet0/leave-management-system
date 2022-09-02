const express = require("express");
const router = express.Router();
// ? local
const { getAllProfiles, getProfilesByUserId } = require("./getProfile");
const addProfile = require("./addProfile");
const editProfile = require("./editProfile");
const deleteProfile = require("./deleteProfile");

router.get("/", getAllProfiles);

router.get("/profile/:userId", getProfilesByUserId);

router.post("/profile", addProfile);

router.put("/profile/:userId", editProfile);

router.delete("/profile/:userId", deleteProfile);

module.exports = router;
