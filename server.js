require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const https = require("https");
const bodyParser = require("body-parser");
// const passport = require("passport");
const path = require("path");
const cors = require("cors");

// * routes
const pingBE = require("./routes/api/ping");
const leaves = require("./routes/api/leave");
const departments = require("./routes/api/department");
const holidays = require("./routes/api/holiday");
const helpers = require("./routes/api/helpers");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client", "build")));

//DB  config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db, {
    // ? options here
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//passport middleware
// app.use(passport.initialize());
app.use(compression());

//passport config
// require("./config/passport.js")(passport);

app.use("/api", pingBE);
app.use("/api/helpers", helpers);
app.use("/api/leaves", leaves);
app.use("/api/departments", departments);
app.use("/api/holidays", holidays);

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// ? models
require("./models/Alteration");
require("./models/Department");
require("./models/Holiday");
require("./models/Leave");
require("./models/LoginAttempts");
require("./models/Notification");
require("./models/Profile");
require("./models/User");

let server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let io = require("./routes/sockets").init(server);

io.sockets.on("connection", (socket) => {
  socket.on("subscribeToNotifications", (data) => {
    require("./routes/sockets/notificationHandler")(io, socket, data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
