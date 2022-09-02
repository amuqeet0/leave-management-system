const Leave = require("../../../models/Leave");

const deleteLeave = async (req, res) => {
  if (req.params.id) {
    try {
      const deletedLeave = await Leave.deleteOne({ leaveId: req.params.id });
      if (deletedLeave) {
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

module.exports = deleteLeave;
