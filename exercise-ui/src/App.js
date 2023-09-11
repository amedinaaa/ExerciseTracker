import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import CreateExercise from './components/CreateExercise';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react';
import { Link } from 'react-router-dom';




function App() {
  
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
      <h2><a href="/" class="head">Exercise Tracker</a></h2>

        <navigation>
         <Router>


         <Routes>
            <Route path="/" element= {<HomePage setExerciseToEdit= {setExerciseToEdit} />}></Route>
            <Route path="/CreateExercise" element={ <CreateExercise /> }></Route>
            <Route path="/EditExercisePage" element = {<EditExercisePage exerciseToEdit={exerciseToEdit} />}> </Route>
         </Routes>
         </Router>
         </navigation>
       
      </header>
      <br></br>
      <footer>©Abraham Medina</footer>
    </div>
  );
}

export default App;
