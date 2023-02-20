const express = require("express");
const router = express.Router();
const seriesController = require("../../controllers/seriesController");

router
  .get("/", seriesController.getAllWorkouts)
  .get("/:workoutId",seriesController.getOneWorkout)
  .post("/:workoutId", seriesController.createNewWorkout)
  .patch("/:workoutId", seriesController.updateOneWorkout)
  .delete("/:workoutId", seriesController.deleteOneWorkout);

module.exports = router;
