const Leave = require("../../../models/Leave");

const addLeave = (req, res) => {
  //   console.log("req.body: ", req.body);
  if (req.body.data) {
    try {
      const newLeave = new Leave({ ...req.body.data });
      newLeave.save();
      if (newLeave) {
        return res.json("leave added!");
      }
    } catch (err) {
      throw new Error("error adding new leave, ", err);
    }
  } else {
    return res.status(400).json("error adding leave...");
  }
};

module.exports = addLeave;
