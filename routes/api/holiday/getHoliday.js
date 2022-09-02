const Holiday = require("../../../models/Holiday");

const getAllHolidays = (req, res) => {
  Holiday.find({})
    .sort({ date: 1 })
    .lean()
    .then((holidayObj) => {
      if (!holidayObj) {
        return res.status(404).json();
      } else {
        return res.json(holidayObj);
      }
    })
    .catch((err) => res.status(404).json(err));
};

const getHolidayById = (req, res) => {
  if (req.params.id) {
    Holiday.find({ userId: req.params.id })
      .sort({ date: 1 })
      .lean()
      .then((holidayObj) => {
        if (!holidayObj) {
          return res.status(404).json();
        } else {
          return res.json(holidayObj);
        }
      })
      .catch((err) => {
        return res.status(400).json("Couldn't found any Leave...", err);
      });
  }
};

module.exports = { getAllHolidays, getHolidayById };
