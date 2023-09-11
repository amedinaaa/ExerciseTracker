import React from "react";
import Rows from "./Row";



function Tbles({exercises, onDelete, onEdit}){
    return (
        <table>
        <thead>
      
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Edit</th>

          </tr>
          
        </thead>
        <tbody>
        {exercises.map((exercise,i) => <Rows exercise = {exercise} onDelete={onDelete} onEdit={onEdit} key={i} />)}
        </tbody>
      </table>

    )
}; 

export default Tbles; 
