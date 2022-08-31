const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: "User" },
    notifications: {
      type: [
        {
          title: { type: String },
          description: { type: String },
        },
      ],
      default: [],
    },
  },
  { minimize: false }
);

module.exports = Notification = mongoose.model(
  "notifications",
  NotificationSchema
);
