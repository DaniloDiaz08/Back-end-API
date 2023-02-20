const DB = require("../models/modelsSeries");

const getAllWorkouts = () => {
    return DB.workouts;
};

module.exports = {getAllWorkouts};
