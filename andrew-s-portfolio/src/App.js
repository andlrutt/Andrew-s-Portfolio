import React from 'react'; 
import Cover from './Cover';
import Toolbar from './Toolbar';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

import './App.css';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Cover />
      <About />
      <Skills />
      <Portfolio />
    </div> 
                    
  )
}

export default App;
