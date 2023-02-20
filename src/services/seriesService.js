const Workout = require("../models/modelsSeries");

const getAllWorkouts = () => { 
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts; 
};

const getOneWorkout = () => { 
    return; 
};

const createNewWorkout = () => { 
    return; 
};

const updateOneWorkout = () => { 
    return; 
};

const deleteOneWorkout = () => { 
    return; 
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}