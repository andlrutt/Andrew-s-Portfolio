import React from 'react';
import './App.css';

function Toolbar() {
    return ( 
        
        <div className="toolbar">
            
            <ul>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>

                
            </ul>
        </div>
    );
}

export default Toolbar;