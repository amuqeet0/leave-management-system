const Leave = require("../../../models/Leave");

const editLeave = async (req, res) => {
  if (req.params.id) {
    try {
      const updateLeave = await Leave.findOneAndUpdate(
        { leaveId: req.params.id },
        {
          ...req.body.data,
        }
      );
      if (updateLeave) {
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

module.exports = editLeave;
