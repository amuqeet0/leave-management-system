const Profile = require("../../../models/Profile");

const getAllProfiles = (req, res) => {
  Profile.find({})
    .sort({ user: 1 })
    .lean()
    .then((result) => {
      if (!result) {
        return res
          .status(404)
          .json("error finding Profiles! Please try again later.");
      } else {
        return res.json(result);
      }
    })
    .catch((err) => res.status(404).json(err));
};

const getProfilesByUserId = (req, res) => {
  if (req.params.userId) {
    Profile.findOne({ user: req.params.userId })
      .sort({ user: 1 })
      .lean()
      .then((result) => {
        if (!result) {
          return res
            .status(404)
            .json("error finding profile! Please try again later.");
        } else {
          return res.json(result);
        }
      })
      .catch((err) => {
        return res.status(400).json("Couldn't found Profile...", err);
      });
  }
};

module.exports = { getAllProfiles, getProfilesByUserId };
