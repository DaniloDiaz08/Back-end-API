const express = require("express");
const v1SeriesRouter = require("./v1/Routes/seriesRoutes");
const mongoose = require("mongoose");
//require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.set("strictQuery", true);

app.use(express.json());
app.use("/api/v1/workouts", v1SeriesRouter);

//mongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Api")
  //.conenect(process.env.MONGO_Series)
  .then(() => console.log("🪐 Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log("🚀 Server listening in port " + port);
});

process.on('uncaughtException', function (err) {
  console.log(err);
});