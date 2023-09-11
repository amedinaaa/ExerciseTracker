import React from "react";
import '../App.css';
import {MdDelete} from 'react-icons/md';
import {MdModeEdit} from 'react-icons/md';

function Rows ({exercise, onDelete, onEdit}) {
    return(
   
 
        <tr>
            <td className="name">{exercise.name}</td>
            <td className="reps">{exercise.reps}</td>
            <td className="weight">{exercise.weight}</td>
            <td className="unit">{exercise.unit}</td>
            <td className="date">{exercise.date}</td>
            <td className= "DeleteIcon"><MdDelete onClick = {()=> onDelete(exercise._id)} /> </td>
            <td className= "EditIcon"><MdModeEdit onClick = {()=> onEdit(exercise)}/> </td>
        </tr>

    
        
    );
}

export default Rows;