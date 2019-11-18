import React from 'react';
import Stack from './components/stack'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bulma/css/bulma.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weirdos?? I seriously wish I knew</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Where we started</Link></li>
        </ul>
      </nav>
      <Router>
        <Stack />
      </Router>
    </div>
    
  );
}

export default App;
