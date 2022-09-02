const Leave = require("../../../models/Leave");

const getLeaves = (req, res) => {
  Leave.find({})
    .sort({ applyDate: 1 })
    .lean()
    .then((leavesObj) => {
      if (!leavesObj) {
        return res.status(404).json();
      } else {
        return res.json(leavesObj);
      }
    })
    .catch((err) => res.status(404).json(err));
};

const getLeaveByUserId = (req, res) => {
  if (req.params.userId) {
    Leave.find({ userId: req.params.userId })
      .sort({ applyDate: 1 })
      .lean()
      .then((leaveObj) => {
        return res.json(leaveObj);
      })
      .catch((err) => {
        return res.status(400).json("Couldn't found any Leave...", err);
      });
  }
};

module.exports = { getLeaves, getLeaveByUserId };
