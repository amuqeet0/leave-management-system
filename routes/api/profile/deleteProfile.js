const Holiday = require("../../../models/Holiday");

const deleteProfile = async (req, res) => {
  if (req.params.userId) {
    try {
      const deletedProfile = await Holiday.deleteOne({
        user: req.params.userId,
      });
      if (!deletedProfile) {
        return res.status(400).json("error deleting leave! Please try again.");
      } else {
        return res.status(200).json("leave deleted!");
      }
    } catch (err) {
      throw new Error("error deleting leave, ", err);
    }
  } else {
    return res.status(400).json("error deleting leave...");
  }
};

module.exports = deleteProfile;
