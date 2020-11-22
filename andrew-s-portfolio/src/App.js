import React from 'react'; 
import Cover from './Cover';
import Toolbar from './Toolbar';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Cover />
      <About />
      <Skills />
      <Contact />
    </div> 
                    
  )
}

export default App;
