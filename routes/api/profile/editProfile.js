const Profile = require("../../../models/Profile");

const editProfile = async (req, res) => {
  if (req.params.userId) {
    try {
      const updateProfile = await Profile.findOneAndUpdate(
        { user: req.params.userId },
        {
          ...req.body.data,
        }
      );
      if (updateProfile) {
        return res.status(200).json("user updated!");
      } else {
        return res.status(400).json("error updating user! Please try again.");
      }
    } catch (err) {
      throw new Error("error updating user, ", err);
    }
  } else {
    return res.status(400).json("error updating user...");
  }
};

module.exports = editProfile;
