const Holiday = require("../../../models/Holiday");

const editHoliday = async (req, res) => {
  if (req.params.id) {
    try {
      const updateHoliday = await Holiday.findOneAndUpdate(
        { leaveId: req.params.id },
        {
          ...req.body.data,
        }
      );
      if (updateHoliday) {
        return res.status(200).json("leave updated!");
      } else {
        return res.status(400).json("error updating leave! Please try again.");
      }
    } catch (err) {
      throw new Error("error updating leave, ", err);
    }
  } else {
    return res.status(400).json("error updating leave...");
  }
};

module.exports = editHoliday;
