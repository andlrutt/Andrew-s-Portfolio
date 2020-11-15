import React from 'react'; 
import Cover from './Cover';
import Toolbar from './Toolbar';
import About from './About';
import Skills from './Skills';

import './App.css';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Cover />
      <About />
      <Skills />
    </div> 
                    
  )
}

export default App;
