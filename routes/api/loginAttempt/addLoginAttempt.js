const LoginAttempt = require("../../../models/LoginAttempts");

const addLoginAttempt = (req, res) => {
  if (req.body.data) {
    try {
      const loginAttempt = new LoginAttempt({ ...req.body.data });
      loginAttempt.save();
      if (loginAttempt) {
        return res.json("login attempt added!");
      }
    } catch (err) {
      throw new Error("error adding login attempt, ", err);
    }
  } else {
    return res.status(400).json("error adding login attempt...");
  }
};

module.exports = addLoginAttempt;
