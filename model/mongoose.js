var mongoose = require("mongoose");
require("dotenv").config();
//Update this to env
var mongoDB = process.env.MONGODB_URL;
mongoose.connect(mongoDB).then((data) => {
  console.log("Database connected");
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));
