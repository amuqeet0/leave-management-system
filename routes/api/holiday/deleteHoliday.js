const Holiday = require("../../../models/Holiday");

const deleteHoliday = async (req, res) => {
  if (req.params.id) {
    try {
      const deleteDel = await Holiday.deleteOne({ leaveId: req.params.id });
      if (deleteDel) {
        return res.status(200).json("leave deleted!");
      } else {
        return res.status(400).json("error deleting leave! Please try again.");
      }
    } catch (err) {
      throw new Error("error deleting leave, ", err);
    }
  } else {
    return res.status(400).json("error deleting leave...");
  }
};

module.exports = deleteHoliday;
