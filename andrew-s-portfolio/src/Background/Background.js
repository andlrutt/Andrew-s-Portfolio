import React from 'react';
import About from './About';
import './App.css';
import CoverImage from './Cover-image';

function Background() {
    return(
        <div className="background">
            <About />
            <CoverImage />
        </div>
    )
}

export default Background;