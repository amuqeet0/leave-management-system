const Leave = require("../../../models/Leave");

const deleteLoginAttempt = async (req, res) => {
  if (req.params.LAId) {
    try {
      const deletedLA = await Leave.deleteOne({ LAId: req.params.LAId });
      if (deletedLA) {
        return res.status(200).json("login attempt deleted!");
      } else {
        return res
          .status(400)
          .json("error deleting login attempt! Please try again.");
      }
    } catch (err) {
      throw new Error("error deleting login attempt, ", err);
    }
  } else {
    return res.status(400).json("error deleting login attempt...");
  }
};

/**
 * delete all login attempts by user
 */
const deleteAllLoginAttempts = async (req, res) => {
  if (req.params.userId) {
    try {
      const deletedLA = await Leave.Many({ userId: req.params.userId });
      if (deletedLA) {
        return res
          .status(200)
          .json(
            `all login attempts by user id: ${req.params.userId} is deleted!`
          );
      } else {
        return res
          .status(400)
          .json("error deleting login attempts! Please try again.");
      }
    } catch (err) {
      throw new Error("error deleting login attempts, ", err);
    }
  } else {
    return res.status(400).json("error deleting login attempts...");
  }
};

module.exports = { deleteLoginAttempt, deleteAllLoginAttempts };
