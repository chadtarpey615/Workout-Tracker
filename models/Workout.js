const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now

    },

    exercises:[ 
    {
        type: {
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
            type: Number
        },

        weight: {
            type: Number
        },

        reps: {
            type: Number
        },

        sets: {
            type: Number
        },

        distance: {
            type: Number
        }
    }   
    ],

    totalDuration: {
        type: Number
    }
});

const Fitness = mongoose.model("Workout", workoutSchema);


module.exports = Fitness;