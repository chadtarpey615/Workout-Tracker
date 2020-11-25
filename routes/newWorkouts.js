const router = require("express").Router();
const Fitness = require("../models/Workout");


router.post("api/workouts", ({ body }, res) => {
    Fitness.create({})
        .then(dbFitness => {
            res.json(dbFitness)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;

