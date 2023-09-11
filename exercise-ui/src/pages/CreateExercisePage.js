import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';



function Exercise(){
 const [name, setName] = useState('');
 const [reps, setReps] = useState('');
 const [weight, setWeight] = useState('');
 const [unit, setUnit] = useState('');
 const [date, setDate] = useState('');
 
 const navigate = useNavigate();

 const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch('/exercises', {
        method: 'POST',
        body: JSON.stringify(newExercise),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if(response.status === 201){
        alert("Successfully added the Exercise!");
    } else {
        alert(`Failed to add exercise`);
    }
    navigate("/");
    
}

 return (
      <div>

        <input 
           type="text" 
           id="i1"
           value={name}
           onChange={e=> setName(e.target.value)}
           placeholder="Enter exercise name" />
        
          <input 
          type="number" 
          id="i2"
          value={reps}
          onChange={e=> setReps(e.target.value)}
          placeholder="reps" />
          <input 
          type="number"
          id="i3"
          value={weight}    
          onChange={e=> setWeight(e.target.value)} 
          placeholder="weight"/>
          <select id="i4" onChange={e=> setUnit(e.target.value)}>
              <option value={null}>select unit</option>
              <option value={"kgs"}>kgs</option>
              <option value={"lbs"}>lbs</option>
          </select>
          <input 
          type="text" 
          id="i5"
          value={date}
          onChange={e=> setDate(e.target.value)} 
          placeholder="date"/>        
        
              
           <button onClick={addExercise}>Add</button>
           <a href='/' class='form-btns'><button>Back</button></a>
      </div>
)}

export default Exercise;