import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Tbles from '../components/Table';

function EditExercisePage ({exerciseToEdit}) {
 const [name, setName] = useState(exerciseToEdit.name);
 const [reps, setReps] = useState(exerciseToEdit.reps);
 const [weight, setWeight] = useState(exerciseToEdit.weight);
 const [unit, setUnit] = useState(exerciseToEdit.unit);
 const [date, setDate] = useState(exerciseToEdit.date);
 
 const navigate = useNavigate();

 const editExercise = async () => {
    const editExercise = { name, reps, weight, unit, date };
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
        method: 'PUT',
        body: JSON.stringify(editExercise),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if(response.status === 200){
        alert("Successfully edited the exercise!");
    } else {
        alert(`Failed to edit exercise`);
    }
    navigate("/");
    
}

 return (
      <div>
    <h3>Editing {exerciseToEdit.name} on {exerciseToEdit.date}</h3>
    
        <input 
           type="text" 
           id="i1"
           value={name}
           placeholder="Enter exercise name"
           onChange={e=> setName(e.target.value)}
            />
        
          <input 
          type="number" 
          id="i2"
          value={reps}
          placeholder="reps"
          onChange={e=> setReps(e.target.value)}
     />
          <input 
          type="number"
          id="i3"
          value={weight}
          placeholder="weight"    
          onChange={e=> setWeight(e.target.value)} 
          />
          <select id="i4" onChange={e=> setUnit(e.target.value)} >
              <option value={null}>select unit</option>
              <option value={"kgs"}>kgs</option>
              <option value={"lbs"}>lbs</option>
          </select>
          <input 
          type="text" 
          id="i5"
          value={date}
          placeholder="date"
          onChange={e=> setDate(e.target.value)} 
          />        
        
              
           <button onClick={editExercise}>Save</button>
           <a href='/' class='form-btns'><button>Back</button></a>
      </div>
)}



export default EditExercisePage