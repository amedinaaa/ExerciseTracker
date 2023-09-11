import React from 'react';
import Tbles from '../components/Table';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Navigation from '../components/Navigation';




function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();
  
    
    const onDelete = async id => {
        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
        const getResponse = await fetch('/exercises');
        const exercises = await getResponse.json();
        setExercises(exercises);
        } else {
        console.error(`Failed to delete exercise with id = ${id}, status code = ${response.status}`)
        }
    }
    const onEdit = async exerciseToEdit =>{
      setExerciseToEdit(exerciseToEdit);
      navigate("/EditExercisePage");

    }
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
}
	
    useEffect(() => {
        loadExercises();
}, []);


  return (
    
  <>
    <Navigation />
    <br></br>
    
             
 

      <Tbles exercises = {exercises} onDelete = {onDelete} onEdit={onEdit}> </Tbles>

 
    </>
  );
}

export default HomePage;


