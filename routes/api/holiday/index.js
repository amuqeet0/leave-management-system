const express = require("express");
const router = express.Router();

// ? local
const { getAllHolidays, getHolidayById } = require("./getHoliday");
const editHoliday = require("./editHoliday");
const deleteHoliday = require("./deleteHoliday");
const addHoliday = require("./addHoliday");

router.get("/", getAllHolidays);

router.get("/holiday/:id", getHolidayById);

router.post("/holiday", addHoliday);

router.delete("/holiday/:id", deleteHoliday);

router.put("/holiday/:id", editHoliday);

module.exports = router;
