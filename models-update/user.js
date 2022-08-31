const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const { accountTypes, staffTypes } = require("../data");

//account type
//0 -- admin
//1 -- office
//2 -- staff

//activated
// 0 -- not activated
// 1 -- activated

const UserAuthSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "example@example.com",
      required: true,
    },
    password: {
      type: String,
      default: `${Math.floor(Math.random() * 90000) + 10000}`,
      min: 8,
      max: 16,
      required: true,
    },
    accountType: {
      // TODO: define enums here
      type: String,
      // enum: Object.values(accountTypes),
      // default: accountTypes.STAFF,
    },
    activated: {
      type: Boolean,
      default: false,
      required: true,
    },
    staffType: {
      type: String,
      // enum: Object.values(staffTypes),
    },
    OTToken: {
      type: String,
      default: "",
    },
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: Number,
      default: -1,
    },
    pwdResetTime: {
      type: Number,
      default: -1,
    },
  },
  { minimize: false }
);

// Object.assign(UserAuthSchema.statics, { accountTypes, staffTypes });

module.exports = User = mongoose.model("user", UserAuthSchema);

// module.exports = mongoose.model("users", UserSchema);
// export const User = mongoose.models.User || mongoose.model("User", user);

// const admin = new User({
//   staffId: "101",
//   name: "admin",
//   designation: "ADMIN",
//   category: "idk",
//   email: "admin@admin.com",
//   password: bcrypt.hashSync("admin123", 10),
//   accountType: "ADMIN",
//   activated: true,
//   staffType: "RT",
// });

// admin.save();
