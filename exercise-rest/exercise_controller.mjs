import 'dotenv/config';
import * as exercises from './exercise_model.mjs';
import express from 'express';
import {query} from 'express-validator'
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

/**
 * Create a new exercise
 */


app.post('/exercises', (req, res) => {
   const checkDate = exercises.isDateValid(req.body.date);
   if (req.body.weight > 0 && checkDate === false && req.body.reps > 0){
    exercises.createExercise(req.body.name,req.body.reps,req.body.weight,req.body.unit,req.body.date)
        .then(exercise => {
            res.status(201).json(exercise)
        }) 
        .catch(error => {
            console.error(error)
            res.status(400).send({ Error: 'Request Failed'});
        })
    } else { 
        res.status(400).send({ Error: 'Request Failed'});
    }
    });
/**
 * Retrive the exercise corresponding to the ID provided in the URL.
 */
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => {
            if (exercise !== null){
                res.json(exercise);
            } else {
                res.status(404).json({Error: 'Resource not found'})
            }
    })
});

/**
 * Retrieve exercises
 * 
 */
app.get('/exercises', async (req, res) => {
    const filter = { };
    let paramLength = Object.keys(req.query).length
    if (paramLength === 0 ){
        const result = await exercises.findExercise(filter);
        res.send(result);
    } else {
    for (let key in req.query) {
            filter[key] = req.query[key]
        }
    const result = await exercises.findExercise(filter);
    res.send(result);
    }
})
/**
 * Update the exercise whose id is provided in the path parameter and set
 * 
 */
app.put('/exercises/:_id', (req, res) => {
    const checkDate = exercises.isDateValid(req.body.date);
    if (req.body.date != null && checkDate === false && (typeof req.body.reps != 'string')) {
      exercises.updateExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated =>{
            if (numUpdated === 1){
                res.json({_id : req.params._id, name : req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
            } else {
                res.status(404).json({Error : "Not Found"})
            }
        })
    } else {
        res.status(400).json({Error: "Invalid request"})
    }
        })
/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExercise(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1){
                res.status(204).send();
            } else{
                res.status(404).json({Error : "Resource not found"})
            }
        })
        .catch (error => {
            console.log(error)
            res.send({ error: "Request failed"})
        })       
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
   