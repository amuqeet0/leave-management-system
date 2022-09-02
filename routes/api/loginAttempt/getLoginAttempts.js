const LoginAttempt = require("../../../models/LoginAttempts");

const getLoginAttempts = (req, res) => {
  LoginAttempt.find({})
    // .sort({ previousAttempts.timestamp: 1 })
    .lean()
    .then((result) => {
      if (!result) {
        return res.status(404).json("error finding data...");
      } else {
        return res.json(result);
      }
    })
    .catch((err) => res.status(404).json(err));
};

const getLoginAttemptsByUserId = (req, res) => {
  if (req.params.id) {
    LoginAttempt.find({ id: req.params.id })
      // .sort({ previousAttempts.timestamp: 1 })
      .lean()
      .then((result) => {
        if (!result) {
          return res.status(404).json("error finding data...");
        } else {
          return res.json(result);
        }
      })
      .catch((err) => {
        return res.status(400).json("Couldn't found any Leave...", err);
      });
  }
};

module.exports = { getLoginAttempts, getLoginAttemptsByUserId };
