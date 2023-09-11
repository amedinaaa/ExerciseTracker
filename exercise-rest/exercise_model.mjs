import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const movieSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true},
    unit : { type: String, required: true},
    date: { type: String, required: true }
});


/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("exercise", movieSchema);

const createExercise =  async (name, reps, weight, unit, date, id) => {
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date,  id : id});
        return exercise.save();
    } 

const findExerciseById = async(_id) => {
    const query = Exercise.findById(_id);
    return query.exec()

}
const findExercise = async(filter) => {
    const query = Exercise.find(filter);
    return query.exec();

}
const updateExercise = async(_id, name , reps, weight, unit, date) =>{
    const result = await Exercise.replaceOne({_id: _id}, { name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.modifiedCount;

} 
const deleteExercise = async (_id) => {
    const result = await Exercise.deleteOne({_id});
    return result.deletedCount;
}
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    if (format.test(date)){
        return false
    }
}

export { createExercise, findExercise, updateExercise, deleteExercise, findExerciseById, isDateValid }