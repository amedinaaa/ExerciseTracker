import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            
            <Link to="/CreateExercise" id="Add"> Add Exercise</Link>
        </nav>
    );
  }
export default Navigation;