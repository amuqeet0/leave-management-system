const Profile = require("../../../models/Profile");

const addProfile = (req, res) => {
  if (req.body.data) {
    try {
      const newHoliday = new Profile({ ...req.body.data });
      newHoliday.save();
      if (newHoliday) {
        return res.json("new Profile added!");
      }
    } catch (err) {
      throw new Error("error adding new profile, ", err);
    }
  } else {
    return res.status(400).json("error adding profile...");
  }
};

module.exports = addProfile;
