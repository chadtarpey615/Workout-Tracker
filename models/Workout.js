const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: String,
        trim: true,
        required: "Enter what type of exercise",

    },

    name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
    },

    duration: {
        type: Number,
        required: "Enter the time limit"
    },

    weight: {
        type: Number,
        required: "Please enter the weight"
    },

    reps: {
        type: Number,
        required: "Please enter the amount of reps"
    },

    sets: {
        type: Number,
        required: "Please enter the amount of sets"
    }
});

const Fitness = mongoose.model("Workout", workoutSchema);


module.exports = Fitness;