const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginAttemptsSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: "User" },
    previousAttempts: {
      type: [
        {
          attemptStatus: { type: String },
          timestamp: { type: String },
          ip: { type: String },
          browser: { type: String },
          browserVersion: { type: String },
          os: { type: String },
          osVersion: { type: String },
        },
      ],
    },
  },
  { minimize: false }
);

module.exports = LoginAttempt = mongoose.model(
  "loginAttempts",
  LoginAttemptsSchema
);
