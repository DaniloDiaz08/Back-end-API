const express = require('express');
const v1WorkoutRouter = require("./v1/Routes/workoutRoutes");
const mongoose = require('mongoose');

const app = express();
const port = process.env.Port || 3000;

mongoose.set('strictQuery', true);

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter)

app.listen(port, () => {
    console.log('🚀 Server listening in port ' +port );
});
