const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  { minimize: false }
);

module.exports = Department = mongoose.model("department", departmentSchema);
