const serieService = require("../services/seriesService");
const serieSchema = require("../models/modelsSeries");

const getAllWorkouts = (req, res) => {
  serieSchema.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

const getOneWorkout = (req, res) => {
  const { SeriesId } = req.params;
  if (!SeriesId) {
    return;
  }
  serieSchema.findById(SeriesId, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

const createNewWorkout = (req, res) => {
  const createdWorkout = serieService.createNewWorkout(req.params.workoutId);
  res.send("Create workout " + req.params.workoutId);
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = serieService.updateOneWorkout(req.params.workoutId);
  res.send("Update workout " + req.params.workoutId);
};

const deleteOneWorkout = (req, res) => {
  serieService.deleteOneWorkout(req.params.workoutId);
  res.send("Delete workout " + req.params.workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
