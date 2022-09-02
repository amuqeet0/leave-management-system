const Holiday = require("../../../models/Holiday");

const addHoliday = (req, res) => {
  if (req.body.data) {
    try {
      const newHoliday = new Holiday({ ...req.body.data });
      newHoliday.save();
      if (newHoliday) {
        return res.json("leave added!");
      }
    } catch (err) {
      throw new Error("error adding new leave, ", err);
    }
  } else {
    return res.status(400).json("error adding leave...");
  }
};

module.exports = addHoliday;
