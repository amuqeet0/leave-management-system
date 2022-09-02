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

(async function () {
  if (!Department.find({})) {
    const physicsDep = new Department({
      id: "1239123",
      name: "physics department",
    });
    console.log("dep added...");
    return physicsDep.save();
  }
})();
